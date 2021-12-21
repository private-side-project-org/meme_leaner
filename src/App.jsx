import React from "react";

import UnAuthorizedRoute from "./UnAuthorizedRoutes/UnAuthorizedRoutes";
import AuthorizedRoutes from "./AuthorizedRoutes/AuthorizedRoutes";
import useAuth from "./hooks/Auth/useAuth";

import { useLocation } from "react-router-dom";

const App = () => {
  const { userInfo } = useAuth();
  const location = useLocation();
  console.log("userInfo", userInfo);
  return userInfo ? (
    <AuthorizedRoutes state={{ from: location }} />
  ) : (
    <UnAuthorizedRoute />
  );
};

export default App;
