import React from "react";
import { Link, useLocation } from "react-router-dom";

import useAuth from "hooks/Auth/useAuth";

import "./layoutHeader.scss";

const LayoutHeader = () => {
  const { setUserInfo } = useAuth();
  const logout = () => {
    setUserInfo();
  };

  const { pathname } = useLocation();

  const titleText =
    pathname === "/mymemes"
      ? "Ur Fav MeMEs"
      : "ThAt's WHat U shoUld LeARN TodAy";

  return (
    <div className="m-0 layoutHeader-container">
      {<h3 className="page-title">{titleText}</h3>}
      <div className="layoutHeader-button-wrapper">
        <Link to="mymemes" className="button">
          My memes
        </Link>
        <button to="logout" className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LayoutHeader;
