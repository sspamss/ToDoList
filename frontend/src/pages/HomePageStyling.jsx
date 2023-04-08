import React from 'react';

const HomePageStyling = () => {
    return (
      <div dangerouslySetInnerHTML={{
        __html: `
          <!-- Login Form -->
          <style>
  
            /* Setting the website's background */
            body {
              background-color: #F6F6EF;
              text-align: center;
            }
  
            /* Setting the To Do List image */
            #todolisticon {
              margin-bottom: 3em;
              margin-top: 1em;
              width: 40%;
              position: center;
            }

            /*Setting and styling Add Task button*/
            #addTaskButton {
              background-color: #9736C5;
              border: none;
              border-radius: 10px;
              box-sizing: border-box;
              height: 45px;
              width: 250px;

              color: #FFFFFF;
              font-family: 'Comic Sans MS', sans-serif;
              font-size: 18pt;
              font-weight: bold;
              position: center;
              text-align: center;
            }

            /* Changing the Add Task button color when hovered over */
            #addTaskButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling the search bar */
            #searchText{
              color: #6C6C6C;
              border-radius: 10px;
              box-sizing: border-box;
              font-size: 12pt;
              font-family: 'Inter', sans-serif;
              text-align: center;
              margin-bottom: 0em;
              position: relative;

              height: 35px;
              width: 600px;
              transform: translateY(-10%);
            }

            /* Removing the "focus ring" when the search tasks field is clicked */
            #searchText:focus {
              outline: none;
            }

            /* Setting and styling the search button */
            #searchTasksButton {
              background-color: #9736C5;

              color: #FFFFFF;
              border: none;
              border-radius: 10px;
              box-sizing: border-box;

              font-size: 15pt;
              font-family: 'Comic Sans MS', sans-serif;
              text-align: center;
              font-weight: bold;

              margin-bottom: 0.5em;
              margin-top: 1.5em;
              height: 35px;
              width: 100px;
            }

            /* Changing the Search Task button color when hovered over */
            #searchTasksButton:hover {
              background-color: #AB6DC9;
            }

            /* Setting and styling the edit button */
            #editTasksButton {
              background-color: #9736C5;

              color: #FFFFFF;
              border: none;
              border-radius: 10px;
              box-sizing: border-box;

              font-size: 12pt;
              font-family: 'Comic Sans MS', sans-serif;
              text-align: center;
              font-weight: bold;

              margin-bottom: 0.5em;
              margin-top: 0em;
              height: 50px;
              width: 70px;
              align: left;

              display: inline-flex;
              align-items: center;
              justify-content: center;

              position: relative;
              left: -310px;
            }

            /* Changing the Edit Tasks button color when hovered over */
            #editTasksButton:hover {
              background-color: #AB6DC9;
            }
  
          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };

  export default HomePageStyling;