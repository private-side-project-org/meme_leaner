import { useMutation } from "react-query";
import request from "hooks/request/request";

const login = (variables) => {
  const response = request("/v1/session", {
    method: "POST",
    headers: {
      "Content-Type": "Authorization",
    },
    body: JSON.stringify(variables),
  });
  return response;
};

export default () => {
  const { mutateAsync: loginMutation } = useMutation(login, {
    onError: (err) => {
      console.log("error", err.message);
    },
    onSuccess: (data) => {
      console.log("success", data);
    },
  });

  return {
    loginMutation,
  };
};
