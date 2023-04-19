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
              background-color: #F6F6EF;
              background-image: url(${HomePageBackground});
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              margin-bottom: 100px;
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
              cursor: pointer;
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
              position: center;
              width: 350px;
            }

            /* Setting and styling the search bar */
            #searchText {
              color: #6C6C6C;
              border: 3px solid #9736C5;
              border-radius: 6px;
              box-sizing: border-box;
              font-family: 'Inter', sans-serif;
              font-size: 12pt;
              margin-bottom: 0.5em;
              margin-right: 0.2em;
              position: relative;
              text-align: center;
   
              height: 30px;
              width: 370px;
            }
            /* Removing the "focus ring" when the search tasks field is clicked */
            #searchText:focus {
              outline: none;
            }

            /* Setting and styling the search button */
            #searchTaskButton {
              color: #FFFFFF;
              background-color: #9736C5;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;
              margin-bottom: 0.5em;
              margin-top: 0.5em;
              text-align: center;

              height: 30px;
              width: 85px;
            }

            #deleteTaskButton {
              color: #FFFFFF;
              background-color: #9736C5;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-family: 'Fredoka One', sans-serif;
              font-size: 1pt;
              margin-left: 3em;
              margin-right: 3em;
              margin-top: 2.5em;
              padding-bottom: 5em;
              padding-top: 5em;
              text-align: center;
              
              height: 20px;
              width: 40px;
            }
            /* Changing the garbage can button color when hovered over */
            #deleteTaskButton:hover {
              background-color: #AB6DC9;
            }
            

            /* Styling Edit Task button */
            #editTaskButton {
              color: #FFFFFF;
              background-color: #9736C5;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;
              margin-bottom: 0.5em;
              margin-top: 0.5em;
              text-align: center;

              height: 30px;
              width: 85px;
            }

            /* Changing the Edit Task button color when hovered over */
            #editTaskButton:hover {
              background-color: #AB6DC9;
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
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;
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
              cursor: pointer;
              border: none;
              border-radius: 6px;
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;
              margin-right: 0.5em;

              height: 30px;
              width: 125px;
            }
            /* Changing the Add Task button color when hovered over */
            #createTaskButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling the selected list from "DISPLAY LIST" */
            #selectedList {
              color: #000000;
              font-family: 'Fredoka One', sans-serif;
              font-size: 25pt;
              text-transform: uppercase;
            }

            /* Styling the error message (if there is one) */
            #errorMessage {
              color: #FF0000;
              font-size: 9pt;
              margin-top: 0.9em;
             
              top: 370px;
              transform: translateX(-50%);
              white-space: nowrap;
            }

            /* Setting and styling the edit button */
            #editTaskButton {
              background-color: #9736C5;
              border: none;
              border-radius: 6px;
              color: #FFFFFF;
              cursor: pointer;
              font-family: 'Fredoka One', sans-serif;
              font-size: 12pt;

              height: 30px;
              width: 105px;
            }
            /* Changing the Edit Tasks button color when hovered over */
            #editTaskButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling the left table title */
            #tableTask {
              background-color: #9736C5;
              border: 1px solid #DDDDDD;
              border-radius: 15px 0px 0px 0px;
              color: #FFFFFF;
              font-family: 'Fredoka One', sans-serif;
              padding-top: 1em;
              padding-bottom: 1em;
            }
            /* Setting and styling the middle table title */
            #tableTime {
              background-color: #9736C5;
              border: 1px solid #DDDDDD;
              color: #FFFFFF;
              font-family: 'Fredoka One', sans-serif;
              padding-top: 1em;
              padding-bottom: 1em;

              width: 100px;

            }
            /* Setting and styling the right table title */
            #tableActions {
              background-color: #9736C5;
              border: 1px solid #DDDDDD;
              border-radius: 0px 15px 0px 0px;
              color: #FFFFFF;
              font-family: 'Fredoka One', sans-serif;
              padding-top: 1em;
              padding-bottom: 1em;

              width: 100px;
            }

            /* Setting and styling the table with the tasks */
            #table {
              border-collapse: separate;
              border-radius: 15px;
              border-spacing: 0em;
              font-family: 'Inter', sans-serif;
              margin-bottom: 20px;
              margin-left: auto;
              margin-right: auto;
              overflow-y: auto;

              width: 100%;
              max-width: 1000px;
            }
            /* Applying different styles when the screen width is less than 1000px */
            @media (max-width: 1000px) {
              #table {
                width: 92%;
              }
            }            
            
            /* Setting and styling the table outlines */
            #tableOutlines {
              border: 1px solid #DDDDDD;
            }

            /* #Table is being stubborn so we make a fake div to make a space at the bottom of the webpage */
            #makeFakeSpace {
              height: 1px;
            }

            /* Setting and styling the "BACK TO TOP" button */
            #scrollToTopButton {
              position: fixed;
              bottom: 20px;
              right: 0;
              z-index: 9999;
            }

          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };

  export default HomePageStyling;