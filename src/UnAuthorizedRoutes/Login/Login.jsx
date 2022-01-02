import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import useLogin from "queries/uselogin";

import Input from "components/Input/Input";

import "./login.scss";

const inputs = ["id", "password"];

const Login = () => {
  const { loginMutation } = useLogin();

  const navigate = useNavigate();
  const { setUserInfo, userInfo } = useAuth();

  const validationSchema = yup.object().shape({
    id: yup.string().required(),
    password: yup.string().required(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("data", data);
    loginMutation(data);
  };

  return (
    <div className="centering">
      <FormProvider {...methods}>
        <form
          className="login-form-wrapper"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {inputs.map((input) => {
            return (
              <Input
                key={input}
                name={input}
                label={input.toUpperCase()}
                layout="column"
              />
            );
          })}
          <button type="submit" className="button mx-auto">
            Less go...
          </button>
        </form>
      </FormProvider>
      <div className="login-links">
        <Link to="/signup">Signup</Link>
        <Link to="/forgot_password">Forgot password</Link>
      </div>
    </div>
  );
};

export default Login;
