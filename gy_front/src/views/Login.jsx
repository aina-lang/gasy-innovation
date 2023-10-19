import React from "react";
import { useAuth } from "../context/AuthContext"; 
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Login() {
  const { login } = useAuth(); 

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password, remember } = formData;

    
    login({ email, password });

  };

  return (
    <div className="p-10 w-[450px] bg-white shadow-md rounded-md">
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
          />
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
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleInputChange}
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Se connecter</Button>
      </form>
    </div>
  );
}
