import React from 'react';
import HomePageBackground from '../graphics/HomePageBackground.png';

const HomePageStyling = () => {
    return (
      <div dangerouslySetInnerHTML={{
        __html: `
          <!-- Login Form -->
          <style>
  
            /* Setting the website background */
            body {
              background-image: url(${HomePageBackground});

              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;

              background-color: #F6F6EF;
              text-align: center;
            }

            /* Setting and styling the username at the top of the webpage */
            #usernameStyling {
              color: #000000;
              font-family: 'Fredoka One', sans-serif;
              font-size: 20pt;
              position: absolute;
              text-align: center;

              top: 25.5px;
              transform: translate(-50%, -50%);
            }

            /* Setting the logout button */
            #signoutButton {
              background-color: #9736C5;
              border: none;
              border-radius: 6px;
              color: #FFFFFF;
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;
              position: absolute;
              text-align: center;

              height: 30px;
              width: 95px;
              right: 10px;
              top: 10px;
            }
            /* Changing the logout button color when hovered over */
            #signoutButton:hover {
              background-color: #AB6DC9;
            }
            
            /* Setting the To Do List image */
            #todolisticon {
              margin-top: 3em;
              width: 400px;
              position: center;
            }

            /* Setting and styling the search bar */
            #searchText {
              color: #6C6C6C;
              border: 3px solid #9736C5;
              border-radius: 6px;
              box-sizing: border-box;
              font-size: 12pt;
              font-family: 'Inter', sans-serif;
              text-align: center;
              margin-bottom: 0.5em;
              margin-right: 0.2em;
              position: relative;
   
              height: 30px;
              width: 370px;
            }
            /* Removing the "focus ring" when the search tasks field is clicked */
            #searchText:focus {
              outline: none;
            }

            /* Setting and styling the search button */
            #searchTaskButton {
              background-color: #9736C5;

              color: #FFFFFF;
              border: none;
              border-radius: 6px;

              font-size: 12pt;
              font-family: 'Fredoka One', sans-serif;
              text-align: center;

              margin-bottom: 0.5em;
              margin-top: 0.5em;

              height: 30px;
              width: 85px;
            }
            /* Changing the Search Task button color when hovered over */
            #searchTaskButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling "CREATE LIST" button*/
            #createListButton {
              background-color: #9736C5;
              color: #FFFFFF;
              cursor: pointer;
              border: none;
              border-radius: 6px;
              font-size: 12pt;
              font-family: 'Fredoka One', sans-serif;
              margin-right: 0.5em;

              height: 30px;
              width: 120px;
            }
            /* Changing the "CREATE LIST" button color when hovered over */
            #createListButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling "CREATE TASK" button*/
            #createTaskButton {
              background-color: #9736C5;
              color: #FFFFFF;
              border: none;
              border-radius: 6px;
              font-size: 12pt;
              font-family: 'Fredoka One', sans-serif;
              margin-right: 0.5em;

              height: 30px;
              width: 125px;
            }
            /* Changing the Add Task button color when hovered over */
            #createTaskButton:hover {
              background-color: #AB6DC9;
            }
            /* Styling the error message (if there is one) */
            #errorMessageCreateTask {
              font-size: 9pt;
              position: absolute;
              margin-top: 0.9em;
              top: 370px;
              transform: translateX(-50%);
              white-space: nowrap;
            }

            /* Setting and styling the edit button */
            #editTaskButton {
              background-color: #9736C5;
              color: #FFFFFF;
              border: none;
              border-radius: 6px;
              font-size: 12pt;
              font-family: 'Fredoka One', sans-serif;

              height: 30px;
              width: 105px;
            }
            /* Changing the Edit Tasks button color when hovered over */
            #editTaskButton:hover {
              background-color: #AB6DC9;
            }
  
          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };

  export default HomePageStyling;