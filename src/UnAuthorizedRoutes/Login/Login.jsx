import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";

import useLogin from "queries/useLogin";

import Input from "components/Input/Input";

import "./login.scss";

const inputs = ["username", "password"];

const Login = () => {
  const { loginMutation } = useLogin();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    loginMutation(data).then((response) => {
      document.cookie = `token=${response.response}`;
      navigate("/memes", { replace: false });
    });
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
