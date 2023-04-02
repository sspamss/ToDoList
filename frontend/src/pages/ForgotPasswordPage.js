import React, {useState} from 'react';
import ForgotPasswordPageStyling from './ForgotPasswordPageStyling';
import WingedEmail from '../graphics/WingedEmail.png';

// Function to handle the login page
const ForgotPasswordPage = () =>
{
  var newSigninUsername; const minUsernameLength = 2, maxUsernameLength = 20;
  var emailAddress, emailAddressConfirmation;

  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {setPasswordShown(!passwordShown);};

  const doForgotPassword = async event => 
  {
    event.preventDefault();
    var obj = {username:newSigninUsername.value, email:emailAddress.value, emailConfirm:emailAddressConfirmation.value};

    // Check for any empty fields
    if (obj.username == "" && obj.email == "" && obj.emailConfirm == "") {setMessage("* Please enter your username and email *"); return;}
    if (obj.username == "" && obj.email == "") {setMessage("* Please enter your username and email *"); return;}
    if (obj.username == "" && obj.emailConfirm == "") {setMessage("* Please enter your username and confirm your email *"); return;}
    if (obj.email == "" && obj.emailConfirm == "") {setMessage("* Please enter your email *"); return;}
    if (obj.username == "") {setMessage("* Please enter your username *"); return;}
    if (obj.email == ""){setMessage("* Please enter your email *"); return;}
    if (obj.emailConfirm == ""){setMessage("* Please confirm your email *"); return;}

    var js = JSON.stringify(obj);
  };

  // Returns the content of the login page
  return (
    <div>
      <ForgotPasswordPageStyling/>
      <div id="forgotpasswordBackground">
        <div class="forgotpasswordContents">
          <form onSubmit={doForgotPassword}>
            <p id="passwordReset">PASSWORD RESET</p>
            <p id = "resetInstructionsP2">Reset instructions will be emailed to you.</p><br/>
            <div class="form-group">
              <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (newSigninUsername = c)}/>
            </div>
            <div class="form-group">
              <input id="emailField" type="text" class="form-control col-md-12" placeholder="EMAIL ADDRESS" ref={(c) => (emailAddress = c)}/>
            </div>
            <div class="form-group">
              <input id="emailFieldConfirmation" type="text" class="form-control col-md-12" placeholder="CONFIRM EMAIL ADDRESS" ref={(c) => (emailAddressConfirmation = c)}/>
            </div>
            <div class="form-group">
              <a href='/' id="signInSignUp">Back to Sign In/Sign Up</a>
            </div>
            <div class="form-group">
              <img id="wingedEmail" src={WingedEmail} alt="Winged Email Image"/>
            </div>
              <span id="errorMessage" class="w-100 text-center" style={{color: "#FF0000"}}> {message}</span>
              <input id="resetPasswordButton" type="submit" class="form-controlL btn-danger submit col-md-12" value="RESET PASSWORD" onClick={doForgotPassword}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
