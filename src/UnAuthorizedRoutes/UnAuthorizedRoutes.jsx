import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "components/Layout/Layout";

import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

const UnAuthorizedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="signup/*" exact element={<Signup />} />
        <Route exact path="/forgot_password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default UnAuthorizedRoutes;
