import React from "react";
import { useNavigate } from "react-router-dom";
import UnAuthorizedForm from "components/UnAuthorizedForm/UnAuthorizedForm";
import useLogin from "queries/useLogin";

const Login = () => {
  const { loginMutation } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    loginMutation(data).then((response) => {
      document.cookie = `token=${response.response}`;
      navigate("/memes", { replace: false });
    });
  };

  return (
    <div className="centering">
      <UnAuthorizedForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
