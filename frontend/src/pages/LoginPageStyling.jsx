import React from 'react';
import ToDoList_bg_2 from '../graphics/ToDoList_bg_2.png';

const LoginPageStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

          /* Setting the website's background image */
          body {
            background-image: url(${ToDoList_bg_2});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          /* Setting dimensions and styling the signin background */
          #signinBackground {
            background-color: #A5B2DF;
            border-radius: 10px;
            transform: translate(-50%, -50%);
            position: absolute;
            text-align: center;

            height: 472px;
            width: 354px;

            left: 50%;
            top: 50%;
          }
    
          /* Setting and styling the username field */
          #usernameField {
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

          /* Setting and styling the "CREATE PASSWORD" field */
          #passwordField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            font-family: 'Inter', sans-serif;
            text-align: center;
            margin-bottom: 0.5em;
            position: relative;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the "CREATE PASSWORD" field is clicked */
          #passwordField:focus {
            outline: none;
          }
    
          /* Styling the "Forgot your password?" */        
          #forgotPassword {
            color: #FFFFFF;
            display: inline-block;
            font-family: 'Nunito', sans-serif;
            font-size: 10pt;
            float: left;
            margin-left: 35px;
            text-align: left;
            text-decoration: underline;
          }
          /* Changing the "Forgot your password?" color when hovered over */
          #forgotPassword:hover {
            color: #7c4182;
          }
    
          /* Setting the To Do List image */
          #todolistpurple {
            margin-bottom: 0.2em;
            margin-top: 1em;
            width: 60%;
          }

          /* Styling the error message (if there is one) */
          #errorMessage {
            font-size: 9pt;
            position: absolute;
            margin-top: 0.8em;
            top: 370px;
            transform: translateX(-50%);
            white-space: nowrap;
          }

          /* Setting and styling the "SIGN IN" button */
          #signinButton {
            background-color: #9736C5;
            border: none;
            border-radius: 12px;
            color: #FFFFFF;
            cursor: pointer;
            margin-top: 0.5em;

            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;

            height: 37px;
            width: 299px;

            position: absolute;
            top: 390px;
            left: 50%;
            transform: translateX(-50%);
          }
          /* Changing the "SIGN IN" button color when hovered over */
          #signinButton:hover {
            background-color: #AB6DC9;
          }

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default LoginPageStyling;