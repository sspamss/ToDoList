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
              width: 400px;
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
              font-size: 12pt;
              margin-bottom: 0.5em;
              margin-top: 0.5em;
              text-align: center;

              height: 30px;
              width: 85px;
            }

            /* Changing the Delete Task button color when hovered over */
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
            /* Styling the error message (if there is one) */
            #errorMessage {
              color: #FF0000;
              font-size: 9pt;
              margin-top: 0.9em;
             
              top: 370px;
              transform: translateX(-50%);
              white-space: nowrap;
            }

            
            table {
              margin: 0 auto;
              font-family: Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 50%;
              border-radius: 30px;
              overflow: hidden;
              margin-bottom: 100px;
            }
            
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              max-width: 200px;
              word-wrap: break-word;
              background-color: #F2F1E8;
            }
            
            th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: center;
              background-color: #AB6DC9;
              color: white;
            }
            tr:last-child td:first-child {
              border-bottom-left-radius: 30px;
            }
            
            tr:last-child td:last-child {
              border-bottom-right-radius: 30px;
            }
            
          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };

  export default HomePageStyling;