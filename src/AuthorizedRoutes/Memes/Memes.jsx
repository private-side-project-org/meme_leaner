import React, { useState } from "react";
import { useQueryClient } from "react-query";
import CONSTANT from "utils/constants";
import useAuth from "hooks/Auth/useAuth";
import useGetRandomMeme from "queries/useGetRandomMeme";
import "./memes.scss";

const { MEME } = CONSTANT;

const Memes = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { setUserInfo } = useAuth();
  const { scrapedMeme, isLoading } = useGetRandomMeme(isButtonPressed);
  const clientCache = useQueryClient();

  const handleGetMeme = () => {
    clientCache.clear(MEME);
    setIsButtonPressed(false);
  };

  return isButtonPressed && scrapedMeme ? (
    // display meme when press meme button
    <div className="centering">
      <img src={scrapedMeme.image} alt="test" />
      <button onClick={handleGetMeme}>Reset button</button>
    </div>
  ) : (
    // display button when initialize
    <div className="centering">
      <button
        onClick={() => setIsButtonPressed(true)}
        className="memes-main-button pointer"
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

export default Memes;
