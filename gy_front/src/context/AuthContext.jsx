// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/login", credentials);
      setUser(response.data.user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
    } catch (error) {
      console.error("Erreur lors de la connexion", error);
    }
  };

  const logout = () => {
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
  };

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/register", userData);
      setUser(response.data.user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setLoading(false);
    } catch (error) {
      setError("Erreur lors de l'inscription");
      setLoading(false);
    }
  };

  useEffect(() => {
    axios.get("/api/user").then((response) => {
      setUser(response.data);
    }).catch((error) => {
      setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
