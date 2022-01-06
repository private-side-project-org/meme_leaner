import { useMutation } from "react-query";
import request from "hooks/request/request";
import { toast } from "react-toastify";

const login = (variables) => {
  const response = request("/v1/login", {
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
    throwOnError: true,
    onError: ({ error }) => {
      toast.error(error.message);
      return error;
    },
  });

  return {
    loginMutation,
  };
};
