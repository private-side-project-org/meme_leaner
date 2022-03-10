import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import useGetRandomMeme from "queries/useGetRandomMeme";
import MemeContent from "./MemeContent/MemeContent";
import Spinner from "components/Spinner/Spinner";

import "./memes.scss";

const Memes = () => {
  // extract shared `context` props with `useOutletContext`
  const [isButtonPressed, setIsButtonPressed] = useOutletContext();
  const navigate = useNavigate();
  const { scrapedMeme, isLoading } = useGetRandomMeme(isButtonPressed);

  const handleMemeButtonClick = (e) => {
    setIsButtonPressed(true);
  };

  return scrapedMeme ? (
    <MemeContent scrapedMeme={scrapedMeme} />
  ) : (
    <div className="centering">
      {!isButtonPressed ? (
        <>
          <button
            onClick={handleMemeButtonClick}
            className="memes-main-button pointer mb-5"
            disabled={isLoading}
          >
            MEMES
          </button>
          <a
            type="button"
            onClick={() => {
              // remove cookie in client size(not sure it is proper way... should be done by BE?)
              document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
              navigate("/", { replace: true });
              return;
            }}
          >
            Logout
          </a>
        </>
      ) : (
        <Spinner isLoading={isLoading} />
      )}
    </div>
  );
};

export default Memes;
