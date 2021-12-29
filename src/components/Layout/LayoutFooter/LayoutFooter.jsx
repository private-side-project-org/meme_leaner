import React from "react";
import PropTypes from "prop-types";
import { useQueryClient } from "react-query";
import CONSTANT from "utils/constants";

import "./layoutFooter.scss";

const propTypes = {
  setIsButtonPressed: PropTypes.func.isRequired,
};

const { MEME } = CONSTANT;

const LayoutFooter = ({ setIsButtonPressed }) => {
  const clientCache = useQueryClient();

  const handleReset = () => {
    clientCache.clear(MEME);
    setIsButtonPressed(false);
  };

  return (
    <div className="layoutFooter-container">
      <button className="button " onClick={handleReset}>
        Reset button
      </button>
    </div>
  );
};

LayoutFooter.propTypes = propTypes;

export default LayoutFooter;
