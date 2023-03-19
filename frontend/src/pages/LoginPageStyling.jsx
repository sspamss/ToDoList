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

            height: 472px;
            width: 354px;

            left: 50%;
            top: 50%;
          }
    
          /* Centering the contents inside the sigin box (except "Forgot your password") */
          #signinText {
            text-align: center;
          }

          /* Styling the "SIGNIN" title*/
          #signin {
            background-color: #FFFFFF;
            border: none;
            border-radius: 12px;
            color: #000000;
            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;
            line-height: 50px;
            margin-bottom: 0.2em;
            margin-left: auto;
            margin-right: auto;
            height: 50px;
            width: 299px;
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
            margin-bottom: 1em;
            margin-top: 1em;
            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #usernameField:focus {
            outline: none;
          }

          /* Setting and styling the password field */
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
          /* Removing the "focus ring" when the password field is clicked */
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
            margin-bottom: 0.5em;
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
            margin-top: 1.06em;
            width: 60%;
          }

          /* Styling the error message (if there is one) */
          #errorMessage {
            font-size: 10pt;
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