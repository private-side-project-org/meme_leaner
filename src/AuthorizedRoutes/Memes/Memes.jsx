import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQueryClient } from "react-query";
import useAuth from "hooks/Auth/useAuth";
import useGetRandomMeme from "queries/useGetRandomMeme";
import MemeContent from "./MemeContent/MemeContent";

import "./memes.scss";

const propTypes = {
  isButtonPressed: PropTypes.bool,
  setIsButtonPressed: PropTypes.func,
};

const Memes = ({ isButtonPressed, setIsButtonPressed }) => {
  const { setUserInfo } = useAuth();
  const { scrapedMeme, isLoading } = useGetRandomMeme(isButtonPressed);
  const clientCache = useQueryClient();

  return isButtonPressed && scrapedMeme ? (
    <MemeContent scrapedMeme={scrapedMeme} />
  ) : (
    // display button when initialize
    <div className="centering">
      <button
        onClick={() => setIsButtonPressed(true)}
        className="memes-main-button pointer mb-5"
        disabled={isLoading}
      >
        MEMES
      </button>
      <a type="button" onClick={() => setUserInfo(null)}>
        Logout
      </a>
    </div>
  );
};

Memes.propTypes = propTypes;
Memes.defaultProps = {
  isButtonPressed: false,
  setIsButtonPressed: () => null,
};

export default Memes;
