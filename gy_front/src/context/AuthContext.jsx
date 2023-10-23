// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(null);

  const [auth_token, setAuth_token] = useState(null);
  // const [refresh_token, setRefresh_token] = useState(null);
  // const [expires_in, setExpires_in] = useState(null);
  // const [token_type, setToken_type] = useState(null);
  // const [id_token, setId_token] = useState(null);
  // const [errors, setErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailValide, setEmailValide] = useState(false);

  const notify = ({ data }) => {
    console.log(data);
    if (data.error) {
      toast.error(data.error, { position: toast.POSITION.TOP_CENTER });
    } else if (data.success) {
      toast.success(data.success, { position: toast.POSITION.TOP_CENTER });
    } else {
      toast.warning(data.warning, { position: toast.POSITION.TOP_CENTER });
    }
  };

  const axioApi = axios.create({
    baseURL: `http://localhost:8000`,
  });

  const login = async (credentials) => {
    setIsLoading(true);
    setIsDisabled(true);

    await axioApi
      .post("/api/login", credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuth_token(response.data.token);
        setUser(response.data.user);
        notify(response);

        setIsLoading(false);
        setIsDisabled(false);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
      })
      .catch((error) => {
        setIsLoading(false);
        setIsDisabled(false);
        toast.error(error.response, { position: toast.POSITION.TOP_CENTER });
        console.error("Erreur lors de la connexion", error);
      });
  };

  const logout = () => {
    setUser(null);
    delete axioApi.defaults.headers.common["Authorization"];
    // notify(response.data);
  };

  const register = async (userData) => {
    setIsLoading(true);
    setIsDisabled(true);
    try {
      const response = await axioApi.post("/api/register", userData);
      setUser(response.data.user);
      axioApi.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setIsLoading(false);
      setIsDisabled(false);
    } catch (error) {
      setError("Erreur lors de l'inscription");
      setIsLoading(false);
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    axioApi
      .get("/api/user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(null);
      });
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isLoading,
        setIsLoading,
        error,
        isDisabled,
        setIsDisabled,
        auth_token,
        email,
        setEmail,
        password,
        setPassword,
        rememberMe,
        setRememberMe,
        emailError,
        setEmailError,
        setPasswordError,
        passwordError,
        emailValide,
        setEmailValide
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
