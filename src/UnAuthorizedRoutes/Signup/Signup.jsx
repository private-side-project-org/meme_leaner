import React from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import Input from "components/Input/Input";
import useSignup from "queries/useSignup";
import useLogin from "queries/useLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const inputs = ["username", "password"];

const Signup = () => {
  const { signupMutation } = useSignup();
  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSignup = (data) => {
    signupMutation(data).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <div className="centering">
      <h3 className="title-font">Sign up</h3>
      <FormProvider {...methods}>
        <form
          className="login-form-wrapper"
          onSubmit={methods.handleSubmit(onSignup)}
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
            Register
          </button>
        </form>
      </FormProvider>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Signup;
