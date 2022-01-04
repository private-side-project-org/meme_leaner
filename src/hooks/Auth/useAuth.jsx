import React, { createContext, useContext, useState } from "react";

const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();

  const values = {
    userInfo,
    setUserInfo,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default () => useContext(authContext);
