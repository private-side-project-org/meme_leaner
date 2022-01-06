import React from "react";

import UnAuthorizedRoute from "./UnAuthorizedRoutes/UnAuthorizedRoutes";
import AuthorizedRoutes from "./AuthorizedRoutes/AuthorizedRoutes";

import { useLocation } from "react-router-dom";

import "./assets/styles/styles.scss";

const App = () => {
  const cookie = document.cookie;
  // take value of cookie without key.
  // It looks like `token=hashed_password` before slice
  const token = cookie.slice(cookie.indexOf("=") + 1);
  const location = useLocation();
  return token ? (
    <AuthorizedRoutes state={{ from: location }} />
  ) : (
    <UnAuthorizedRoute />
  );
};

export default App;
