import React from 'react';

const SlidingAnimationStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

        /* Setting and styling the background of the toggle bar */
        #toggleSlider {
          background-color: #FFFFFF;
          border-radius: 12px;
          display: flex;
          font-family: 'Fredoka One', sans-serif;
          justify-content: space-between;
          margin-top: 2em;
          position: relative;
          transform: translateX(-50%);

          height: 50px;
          width: 299px;
          
          left: 50%;
          top: 0px;
        }
        
        /* Setting and stying the black (not active) "SIGN IN" text */
        #toggleSignin {
          background-color: transparent;
          border: none;
          border-radius: 12px;
          color: #000000;
          cursor: pointer;
          font-size: 18pt;
          margin-left: auto;
          margin-right: auto;
          outline: none;
          font-family: 'Fredoka One', sans-serif;
        }

        /* Setting and styling the black (not active) "SIGN UP" text */
        #toggleSignup {
          background-color: transparent;
          border: none;
          border-radius: 12px;
          color: #000000;
          cursor: pointer;
          font-family: 'Fredoka One', sans-serif;
          font-size: 18pt;
          margin-left: auto;
          margin-right: auto;
          outline: none;
        }

        /* Setting and styling the white (active) "SIGN IN" text */
        #toggleCurrent {
          background-color: #9736C5;
          border: none;
          border-radius: 12px;
          color: #FFFFFF;
          font-family: 'Fredoka One', sans-serif;
          font-size: 18pt;
          margin-left: auto;
          margin-right: auto;
          position: absolute;
          outline: none;
          transition: all 0.2s ease-in-out;

          height: 50px;
          width: 148px;
        }

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default SlidingAnimationStyling;