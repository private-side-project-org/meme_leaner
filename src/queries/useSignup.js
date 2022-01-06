import { useMutation } from "react-query";
import request from "hooks/request/request";

const signup = (userCredencials) => {
  request("/v1/session", {
    method: "POST",
    body: JSON.stringify(userCredencials),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default () => {
  const { mutateAsync: signupMutation } = useMutation(signup, {
    onError: (err) => {
      console.log("err", err);
    },
    onSuccess: () => console.log("success sign up"),
  });

  return {
    signupMutation,
  };
};
