import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Header from "../components/Header";
import Login from "../views/Login";
import MyFooter from "../components/Footer";
import BackofficeRoutes from "../backOffice/routes";
import Layout from "../backOffice/views/Layout";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {BackofficeRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          ))}
        </Routes>
        <MyFooter />
      </Router>
    </div>
  );
};

export default AppRouter;
