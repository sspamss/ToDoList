// // Check if the username and password is long enough
// if (obj.login.length < minUsernameLength || obj.login.length > maxUsernameLength)
//   {setMessage(`* Username must be between ${minUsernameLength} and ${maxUsernameLength} characters long. *`); return;}
// if (obj.password.length < minPasswordLength || obj.password.length > maxPasswordLength)
//   {setMessage(`* Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long. *`); return;}

import React, {useState} from 'react';
import SignupPageStyling from './SignupPageStyling';

// Function to handle the login page
const SignupPage = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");

  var signupFirstname, signupLastname, signupEmailaddress;
  var signupUsername; const minUsernameLength = 2, maxUsernameLength = 20;
  var signupPassword, signupPasswordConfirm; const minPasswordLength = 6, maxPasswordLength = 20;

  const [messageSignup, setMessageSignup] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  // Function to handle the sign up form
  const doSignup = async event => 
  {
    event.preventDefault();
    var obj = {user:signupUsername.value, password:signupPassword.value, passwordConfirm:signupPasswordConfirm.value};

    // Check for any empty fields
    if (obj.user == "" && obj.password == "" && obj.passwordConfirm == "") {messageSignup("* Please enter your username and password *"); return;}
    if (obj.user == "" && obj.password == "") {messageSignup("* Please enter your username and password *"); return;}
    if (obj.user == "" && obj.passwordConfirm == "") {messageSignup("* Please enter your username and password *"); return;}
    if (obj.user == "") {messageSignup("* Please enter your username *"); return;}
    if (obj.password == "") {messageSignup("* Please enter your password *"); return;}
    if (obj.passwordConfirm == "") {messageSignup("* Please enter your password *"); return;}

    // Check for any invalid characters
    if (obj.user.includes(" ")) {messageSignup("* Username cannot contain spaces *"); return;}
    if (obj.password.includes(" ")) {messageSignup("* Password cannot contain spaces *"); return;}
    if (obj.passwordConfirm.includes(" ")) {messageSignup("* Password cannot contain spaces *"); return;}

    // Check if the username and password is long enough
    if (obj.user.length < minUsernameLength || obj.user.length > maxUsernameLength)
      {messageSignup("* Username must be between ${minUsernameLength} and ${maxUsernameLength} characters long. *"); return;}
    if (obj.password.length < minPasswordLength || obj.password.length > maxPasswordLength)
      {messageSignup("* Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long. *"); return;}

    // Check if the password and password confirmation match
    if (obj.password != obj.passwordConfirm) {messageSignup("* Passwords do not match *"); return;}

    // Send a request to the backend to create a new account
    var js = JSON.stringify(obj);

    try
    {
      // Fetch the request
      const response = await fetch(bp.buildPath('api/signup'), {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());

      // Clear the form
      signupUsername.value = "";
      signupPassword.value = "";
      signupPasswordConfirm.value = "";

      // Check if the request was successful
      if (res.error == "") {messageSignup("* Account created successfully *"); return;}
      else {messageSignup("* " + res.error + " *"); return;}
    }
    catch(e)
    {
      // Display an error message
      alert(e.toString());
    }
  };

  // Returns the content of the login page
  return (
    <div>
      <SignupPageStyling/>
      <form id="doSignup" onSubmit={doSignup}>
        <div class="form-group">
          <input id="firstnameField" type="text" class="form-control col-md-12" placeholder="FIRST NAME" ref={(c) => (signupFirstname = c)}/>
        </div>
        <div class="form-group">
          <input id="lastnameField" type="text" class="form-control col-md-12" placeholder="LAST NAME" ref={(c) => (signupLastname = c)}/>
        </div>
        <div class="form-group">
          <input id="emailaddressField" type="text" class="form-control col-md-12" placeholder="EMAIL ADDRESS" ref={(c) => (signupEmailaddress = c)}/>
        </div>
        <div class="form-group">
          <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signupUsername = c)}/>
        </div>
        <div id="passwordContainer" className="password-container">
          <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="CREATE PASSWORD" ref={(c) => (signupPassword = c)}/>
        </div>
        <div id="passwordContainer" className="password-container">
          <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordConfirmField" placeholder="CONFIRM PASSWORD" ref={(c) => (signupPassword = c)}/>
        </div>
          <span id="errorMessageSignup" class="w-100 text-center" style={{color: "#FFFFFF"}}> {messageSignup}</span>
          <input id="signupButton"  type="submit" class="form-controlL btn-danger submit col-md-12" value="SIGN UP" onClick={doSignup}/>
      </form>
    </div>
  );
};

export default SignupPage;
