import React from "react";
import useSignup from "queries/useSignup";
import UnAuthorizedForm from "components/UnAuthorizedForm/UnAuthorizedForm";

const Signup = () => {
  const { signupMutation } = useSignup();

  const onSignup = (data) => {
    signupMutation(data).then((res) => {
      console.log("res", res);
    });
  };

  return (
    <div className="centering">
      <UnAuthorizedForm onSubmit={onSignup} />
    </div>
  );
};

export default Signup;
