import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";

import { useForm } from "react-hook-form";

import "./login.scss";

const inputs = ["id", "password"];

const Login = () => {
  const { setUserInfo } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="centering">
      <form className="login-form-wrapper">
        {inputs.map((input) => {
          return (
            <React.Fragment key={input}>
              <label htmlFor={input} className="login-input-title">
                {input.toUpperCase()}
              </label>
              <input
                name={input}
                className="login-input"
                defaultValue={input}
                {...register(input)}
              />
            </React.Fragment>
          );
        })}
      </form>
      <ul className="login-links">
        <li className="base-font">
          <Link
            to="/memes"
            className="button"
            onClick={() => setUserInfo("user")}
          >
            Less go...
          </Link>
        </li>
        <li className="login-reset-wrapper">
          <Link to="/signup">Signup</Link>
          <Link to="/forgot_password">Forgot password</Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
