import React from "react";
import BackToTopButtonStyling from "./BackToTopButtonStyling";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesUp} from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <div>
      <BackToTopButtonStyling/>
      <button id="backToTopButton" className="back-to-top-button" onClick={handleBackToTop}>
        <FontAwesomeIcon icon={faAnglesUp}/>
      </button>
    </div>
  );
};

export default BackToTopButton;