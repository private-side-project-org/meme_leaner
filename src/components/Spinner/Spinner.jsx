import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = (isLoading) => {
  const spinnerValues = {
    color: "#365BD7",
    loading: isLoading,
    size: 150,
  };
  return <ClipLoader {...spinnerValues} />;
};

export default Spinner;
