import React, {useState} from 'react';
import ForgotPasswordPageStyling from './ForgotPasswordPageStyling';
import WingedEmail from '../graphics/WingedEmail.png';

// Function to handle the login page
const emailVerificationPage = () =>
{
  let bp = require("./LoginPagePath.js");
  var confirmationCode;

  const doForgotPassword = async event => {
    event.preventDefault();
    var obj = {confirmationCode:confirmationCode.value};
    // Check for any empty fields

    var js = JSON.stringify(obj);

    const response = await fetch(bp.buildPath('api/validCode'),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
    var res = JSON.parse(await response.text());

    if (res._id <= 0){
      return;
    }

    else{
      await fetch(bp.buildPath('api/updateCode'), {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

    }
  };

  // Returns the content of the login page
  return (
    <div>
      <ForgotPasswordPageStyling/>
      <div id="forgotpasswordBackground">
        <div class="forgotpasswordContents">
          <form onSubmit={doForgotPassword}>
            <p id="passwordReset">Email Verification</p>
            <p id = "resetInstructions">instructions have been emailed to you.</p>
            <div class="form-group">
              <input id="usernameField" type="text" class="form-control col-md-12" placeholder="Confirmation Code" ref={(c) => (confirmationCode = c)}/>
            </div>
            <div class="form-group">
              <a href='/' id="backToSignIn">Back to sign in</a><br/>
            </div>
            <div class="form-group">
              <img id="wingedEmail" src={WingedEmail} alt="Winged Email"/>
            </div>
              <input id="resetPasswordButton" type="submit" class="form-controlL btn-danger submit col-md-12" value="Verify Email" onClick={doForgotPassword}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default emailVerificationPage;
