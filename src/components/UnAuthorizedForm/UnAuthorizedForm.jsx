import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import Input from "components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./unAuthorizedForm.scss";

const inputs = ["username", "password"];

const UnAuthorizedForm = ({ onSubmit }) => {
  const { pathname } = useLocation();
  const isSignupPage = pathname === "/signup";

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="centering">
      <h3 className="title-font">{isSignupPage ? "Sign up" : "Login"}</h3>
      <FormProvider {...methods}>
        <form
          className="unAuthorizedForm-form-wrapper"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {inputs.map((input) => {
            return (
              <Input
                key={input}
                name={input}
                label={input.toUpperCase()}
                layout="column"
                inputType={input === "username" ? "text" : "password"}
              />
            );
          })}
          <button type="submit" className="button mx-auto">
            {isSignupPage ? "Register" : "Submit"}
          </button>
        </form>
      </FormProvider>

      {isSignupPage ? (
        <Link to="/">Back</Link>
      ) : (
        <div className="unAuthorizedForm-links">
          <Link to="/signup">Signup</Link>
          <Link to="/forgot_password">Forgot password</Link>
        </div>
      )}
    </div>
  );
};

export default UnAuthorizedForm;
