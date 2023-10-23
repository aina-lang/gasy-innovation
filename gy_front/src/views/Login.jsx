import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import ProgresseBar, {
  configureProggressBar,
} from "../components/ProgresseBar";

export default function Login() {
  const {
    login,
    isLoading,
    setIsLoading,
    isDisabled,
    setIsDisabled,
    // email,
    // setEmail,
    // password,
    // setPassword,
    // rememberMe,
    // setRememberMe,
    emailValide,
    setEmailValide,
    // emailError,
    // setEmailError,
    // setPasswordError,
    // passwordError,
  } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    switch (type) {
      case "email":
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          setEmailValide(true);
        } else {
          setEmailValide(false);
        }
        break;
      case "password":
        if (value.length < 8) {
          console.log("Le mot de passe doit contenir au moins 8 caractères.");
        }
        if (!/[A-Z]/.test(value)) {
          console.log(
            "Le mot de passe doit contenir au moins une lettre majuscule."
          );
        }
        if (!/\d/.test(value)) {
          console.log("Le mot de passe doit contenir au moins un chiffre.");
        }
        if (/(?=.*[A-Z])(?=.*\d).{8,}/.test(value)) {
          configureProggressBar("secure");
        } else if (/(?=.*[A-Z])(?=.*\d).{6,}/.test(value)) {
          configureProggressBar("good");
        } else if (/(?=.*[A-Z])(?=.*\d).{4,}/.test(value)) {
          configureProggressBar("good");
        } else if (/\d+/.test(value) || /[A-Z]+/.test(value)) {
          configureProggressBar("good");
        } else {
          configureProggressBar("weak");
        }
        break;
      default:
        break;
    }

    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);

    const { email, password, remember } = formData;
    login({ email, password, remember });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-10 w-[450px] bg-white shadow-md rounded-md mx-auto">
        <form
          className="flex max-w-md flex-col gap-4 "
          onSubmit={handleFormSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="xxx@xxx.xxx"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <span
              className={
                emailValide
                  ? "text-green-400 text-sm ml-1"
                  : "text-red-500  text-sm ml-1"
              }
            >
              {emailValide
                ? "adresse email valide "
                : "adresse email non valide"}
            </span>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Mot de passe" />
            </div>
            <TextInput
              id="password"
              required
              type="password"
              name="password"
              placeholder="votre mot de passe"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <ProgresseBar />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
              disabled={isDisabled}
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" disabled={isDisabled} className="bg-indigo-700">
            {isLoading ? "veuillez patienter ..." : "Se connecter"}
          </Button>
        </form>
      </div>
    </div>
  );
}
