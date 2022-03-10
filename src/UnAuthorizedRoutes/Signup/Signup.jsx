import React from "react";
import useSignup from "queries/useSignup";
import useLogin from "queries/useLogin";
import UnAuthorizedForm from "components/UnAuthorizedForm/UnAuthorizedForm";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signupMutation } = useSignup();
  const { loginMutation } = useLogin();
  const navigate = useNavigate();

  const onSignup = (data) => {
    signupMutation(data).then((res) => {
      setTimeout(() => {
        console.log("trigger login");
        loginMutation(data).then((response) => {
          document.cookie = `token=${response.response}`;
          navigate("/memes", { replace: false });
        });
      }, 1000);
    });
  };

  return (
    <div className="centering">
      <UnAuthorizedForm onSubmit={onSignup} />
    </div>
  );
};

export default Signup;
