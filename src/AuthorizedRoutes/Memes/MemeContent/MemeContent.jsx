import React from "react";
import PropTypes from "prop-types";

import "./memeContent.scss";

const propTypes = {
  scrapedMeme: PropTypes.shape({
    image: PropTypes.string,
    origin: PropTypes.string,
    origin_text: PropTypes.string,
    about: PropTypes.string,
    about_text: PropTypes.string,
  }).isRequired,
};

const MemeContent = ({ scrapedMeme }) => {
  return (
    <div className="memeContent-container pb-4">
      <h3 className="memeContent-title">{scrapedMeme.meme_title}</h3>
      <section className="memeContent-section-wrapper">
        <div className="memeContent-content-left">
          <img
            className="memeContent-image"
            src={scrapedMeme.image}
            alt="meme_image"
          />
          <div className="memeContent-about-wrapper">
            <p className="memeContent-text-title">{scrapedMeme.about}</p>
            <p>{scrapedMeme.about_text}</p>
          </div>
        </div>
        <div className="memeContent-content-right">
          <p className="mt-0">{scrapedMeme.origin}</p>
          <p>{scrapedMeme.origin_text}</p>
        </div>
      </section>
    </div>
  );
};

MemeContent.propTypes = propTypes;

export default MemeContent;
