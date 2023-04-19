import React from 'react';

const BackToTopButtonStyling = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        
      /* Setting and styling the "BACK TO TOP" BUTTON */
      #backToTopButton {
        background-color: #9736C5;
        border: none;
        border-radius: 6px;
        bottom: 20px;
        color: #FFFFFF;
        font-family: 'Fredoka One', sans-serif;
        font-size: 20pt;
        position: fixed;
        right: 20px;
        z-index: 9999;

        width: 40px;
        height: 35px;
      }
      `
    }} />
  );
};

export default BackToTopButtonStyling;