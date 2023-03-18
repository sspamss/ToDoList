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
    
          /* Setting and styling the username field */
          #username {
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
          #username:focus {
            outline: none;
          }

          /* Setting and styling the password field */
          #password {
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
          #password:focus {
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
            width: 60%;
          }

          /* Styling the error message (if there is one) */
          #errorMessage {
            font-size: 10pt;
          }

          /* Setting and styling the "Sign in" button */
          #signinButton {
            background-color: #9736C5;
            border: none;
            border-radius: 12px;
            color: white;
            cursor: pointer;
            margin-top: 0.5em;

            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;

            height: 37px;
            width: 299px;
          }
          /* Changing the "Sign in" button color when hovered over */
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