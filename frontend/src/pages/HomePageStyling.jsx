import React from 'react';
import ToDoIcon from '../graphics/ToDoIcon.png';

const HomePageStyling = () => {
    return (
      <div dangerouslySetInnerHTML={{
        __html: `
          <!-- Login Form -->
          <style>
  
            /* Setting the website's background */
            body {
              background-color: #F6F6EF;
            }
  
            /* Setting the To Do List image */
            #todolisticon {
              margin-bottom: 0.2em;
              margin-top: 1em;
              width: 100%;
              position: absolute;
              text-align: center;
            }

            /* Setting and styling the username field */
            #searchTasksButton {
              color: #6C6C6C;
              border: none;
              border-radius: 10px;
              box-sizing: border-box;
              font-size: 12pt;
              font-family: 'Inter', sans-serif;
              text-align: center;
              margin-bottom: 0.5em;
              margin-top: 1.5em;
              height: 30px;
              width: 299px;
            }
            /* Removing the "focus ring" when the username field is clicked */
            #usernameField:focus {
              outline: none;
            }
  
          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };

  export default HomePageStyling;