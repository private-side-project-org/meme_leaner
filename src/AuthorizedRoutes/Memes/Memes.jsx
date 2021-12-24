import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "hooks/Auth/useAuth";
import useGetRandomMeme from "queries/useGetRandomMeme";
import "./memes.scss";

const Memes = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { setUserInfo } = useAuth();
  const { scrapedMeme } = useGetRandomMeme(isButtonPressed);

  console.log("scrapedMeme", scrapedMeme);

  return isButtonPressed && scrapedMeme ? (
    // display meme when press meme button
    <div className="centering">
      <img src={scrapedMeme.image} alt="test" />
      <button onClick={() => setIsButtonPressed(false)}>Reset button</button>
    </div>
  ) : (
    // display button when initialize
    <div className="centering">
      <button
        onClick={() => setIsButtonPressed(true)}
        className="memes-main-button pointer"
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
