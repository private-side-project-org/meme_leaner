import React from "react";
import PropTypes from "prop-types";
import { useFormContext, get } from "react-hook-form";

import "./input.scss";

const propTypes = {
  // hook-form register name
  name: PropTypes.string,

  label: PropTypes.string,
  register: PropTypes.func,
  layout: PropTypes.string,
  inputType: PropTypes.string,
};

const Input = ({ name, label, layout, inputType }) => {
  const { register, formState, getValues } = useFormContext();
  const error = get(formState.errors, name);

  return (
    <div className={`input-container ${layout}`}>
      {label && <label className="title-font mb-2">{label}</label>}
      <input
        {...register(name)}
        type="text"
        className="base-font py-1 px-3"
        autoComplete={inputType === "text" ? "off" : "new-password"}
      />
      {error && <p className="error-font mb-0 mt-1">{error.message}</p>}
    </div>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = {
  label: "",
  register: () => null,
  layout: "",
};

export default Input;
