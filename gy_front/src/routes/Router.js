import React from "react";
import { Route, BrowserRouter as R, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Header from "../components/Header";

import Login from "../views/Login";
const Router = () => {
  return (
    <div>
      <R>
        <Header/>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/register" Component={Home} />
          <Route path="/login" Component={Login} />

        </Routes>
      </R>
    </div>
  );
};

export default Router;
