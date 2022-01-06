import React from "react";
import { useOutletContext } from "react-router-dom";
import useAuth from "hooks/Auth/useAuth";
import useGetRandomMeme from "queries/useGetRandomMeme";
import MemeContent from "./MemeContent/MemeContent";

import "./memes.scss";

const Memes = () => {
  // extract shared `context` props with `useOutletContext`
  const [isButtonPressed, setIsButtonPressed] = useOutletContext();

  const { setUserInfo } = useAuth();
  const { scrapedMeme, isLoading } = useGetRandomMeme(isButtonPressed);

  return scrapedMeme ? (
    <MemeContent scrapedMeme={scrapedMeme} />
  ) : (
    // display button when initialize
    <div className="centering">
      <button
        onClick={() => {
          setIsButtonPressed(true);
        }}
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

export default Memes;
