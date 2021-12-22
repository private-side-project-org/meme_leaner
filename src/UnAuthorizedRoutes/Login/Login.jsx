import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
const Login = () => {
  const { setUserInfo } = useAuth();

  return (
    <ul>
      <li>
        <Link to="/memes" onClick={() => setUserInfo("user")}>
          Login
        </Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/forgot_password">Forgot password</Link>
      </li>
    </ul>
  );
};

export default Login;
