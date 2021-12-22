import React from "react";

import UnAuthorizedRoute from "./UnAuthorizedRoutes/UnAuthorizedRoutes";
import AuthorizedRoutes from "./AuthorizedRoutes/AuthorizedRoutes";
import useAuth from "./hooks/Auth/useAuth";

import { useLocation } from "react-router-dom";

import "./assets/styles/styles.scss";

const App = () => {
  const { userInfo } = useAuth();
  const location = useLocation();
  return userInfo ? (
    <AuthorizedRoutes state={{ from: location }} />
  ) : (
    <UnAuthorizedRoute />
  );
};

export default App;
