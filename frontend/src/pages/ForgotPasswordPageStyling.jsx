import React from 'react';
import ToDoListBackground from '../graphics/ToDoListBackground.png';

const LoginPageStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

          /* Setting the website's background image */
          body {
            background-image: url(${ToDoListBackground});

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          /* Setting dimensions and styling the signin background */
          #forgotpasswordBackground {
            background-color: #A5B2DF;
            border-radius: 10px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            text-align: center;

            height: 472px;
            width: 354px;
          }
    
          /* Setting and Styling the "PASSWORD RESET" title*/
          #passwordReset {
            background-color: #FFFFFF;
            border: none;
            border-radius: 12px;
            color: #000000;
            font-family: 'Fredoka One', sans-serif;
            font-size: 18pt;
            line-height: 50px;
            margin-bottom: 0em;
            margin-top: 1.33em;
            position: relative;
            transform: translateX(-50%);

            height: 50px;
            width: 299px;
            
            left: 50%;
            top: 0px;
          }

          /* Styling the password reset instructions */
          #resetInstructions {
            color: #FFFFFF;
            margin-top: 0.2em;
            margin-bottom: 0.15em;

            font-family: 'Nunito', sans-serif;
            font-size: 12pt;
          }
    
          /* Setting and styling the username field */
          #usernameField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            text-align: center;
            margin-bottom: 0.5em;

            font-size: 12pt;
            font-family: 'Inter', sans-serif;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #usernameField:focus {
            outline: none;
          }

          /* Setting and styling the email address field */
          #emailField {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            text-align: center;
            margin-bottom: 0.5em;

            font-size: 12pt;
            font-family: 'Inter', sans-serif;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #emailField:focus {
            outline: none;
          }

          /* Setting and styling the email address confirmation field */
          #emailFieldConfirmation {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            font-size: 12pt;
            text-align: center;
            margin-bottom: 0.3em;

            height: 30px;
            width: 299px;
          }
          /* Removing the "focus ring" when the username field is clicked */
          #emailFieldConfirmation:focus {
            outline: none;
          }

          /* Styling the "Back to sign in" */        
          #backToSignIn {
            color: #FFFFFF;
            display: inline-block;
            font-family: 'Nunito', sans-serif;
            font-size: 10pt;
            float: left;
            margin-left: 35px;
            text-align: left;
            text-decoration: underline;
          }
          /* Changing the "Back to Sign In/Sign Up" color when hovered over */
          #backToSignIn:hover {
            color: #7c4182;
          }
    
          /* Setting the "WingedEmail.png" */
          #wingedEmail {
            width: 70%;
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

          /* Setting and styling the "Forgot your password?" clickable text */
          #resetPasswordButton {
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
          /* Changing the "RESET PASSWORD" button color when hovered over */
          #resetPasswordButton:hover {
            background-color: #AB6DC9;
          }

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default LoginPageStyling;