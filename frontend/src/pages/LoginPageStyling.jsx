import React from 'react';

const LoginPageStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

          /* Setting dimensions and styling the login background */
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
    
          /* Centering the contents inside the sigin box */
          #signinText {
            text-align: center;
          }
    
          /* Styling the title*/
          #title {
            color: #FFFFFF;
            font-family: 'Nunito', sans-serif;
            font-size: 2.0em;
            margin-bottom: 0em;
          }
    
          /* Styling the motto */
          #motto {
            color: #FFFFFF;
            font-family: 'Nunito', sans-serif;
            font-size: 1.3em;
            font-style: italic;
          }
    
          /* Setting and styling the username field */
          #username{
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            text-align: center;
            margin-bottom: 1em;

            height: 30px;
            width: 299px;
          }

          /* Setting and styling the password field */
          #password {
            color: #6C6C6C;
            border: none;
            border-radius: 10px;
            box-sizing: border-box;
            font-size: 12pt;
            text-align: center;
            margin-bottom: 0.5em;

            height: 30px;
            width: 299px;
          }
    
          /* Styling the "Forgot your password?" */
          #forgotPassword {
            color: #FFFFFF;
            display: block;
            font-size: 10pt;
            margin-left: 3.0em;
            text-align: left;

            height: 30px;
            width: 299px;
          }          
          #forgotPassword:hover {
            color: #EFEFEF;
          }
    
          /* Setting the To Do List image */
          #todolistpurple {
            margin-bottom: 0.2em;
            width: 60%;
          }

          #loginResult {
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
