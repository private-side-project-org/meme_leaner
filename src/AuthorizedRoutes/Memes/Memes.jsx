import React from "react";
import { Link } from "react-router-dom";
import useAuth from "hooks/Auth/useAuth";

import "./memes.scss";

const Memes = () => {
  const { setUserInfo } = useAuth();

  return (
    <div className="centering">
      <Link to="/mymemes" className="memes-main-button pointer">
        MEMES
      </Link>
      <a type="button" onClick={() => setUserInfo("")}>
        Logout
      </a>
    </div>
  );
};

export default Memes;
