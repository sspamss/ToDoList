import React, {useState} from 'react';
import SignupPageStyling from './SignupPageStyling';
import SpotifyCode from '../graphics/SpotifyCode.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);

  // Function to handle the sign up form
  const doSignup = async event => 
  {
    event.preventDefault();
    var obj = {firstName:signupFirstname.value, lastName:signupLastname.value, email:signupEmailaddress.value, user:signupUsername.value, password:signupPassword.value};

    // Check for any empty fields
    if (obj.firstName === "") {setMessageSignup("* Please fill in all the fields *"); return;}
    if (obj.lastName === "") {setMessageSignup("* Please fill in all the fields *"); return;}
    if (obj.email === "") {setMessageSignup("* Please fill in all the fields *"); return;}
    if (obj.user === "") {setMessageSignup("* Please fill in all the fields *"); return;}
    if (obj.password === "") {setMessageSignup("* Please fill in all the fields *"); return;}
    if (signupPasswordConfirm === "") {setMessageSignup("* Please confirm your password*"); return;}

    // Check for any invalid characters
    if (obj.user.includes(" ")) {setMessageSignup("* Username cannot contain spaces *"); return;}
    if (obj.password.includes(" ")) {setMessageSignup("* Password cannot contain spaces *"); return;}

    // Check if the username and password is long enough
    if (obj.user.length < minUsernameLength || obj.user.length > maxUsernameLength)
      {setMessageSignup(`* Username must be between ${minUsernameLength} and ${maxUsernameLength} characters *`); return;}
    if (obj.password.length < minPasswordLength || obj.password.length > maxPasswordLength)
      {setMessageSignup(`* Password must be between ${minPasswordLength} and ${maxPasswordLength} characters *`); return;}

    // Check if the password and password confirmation match
    if (obj.password !== signupPasswordConfirm.value) {setMessageSignup("* Passwords do not match *"); return;}

    var js = JSON.stringify(obj);

    // Send the login information to the backend and check if the sign in is valid
    try
    {
        const response = await fetch(bp.buildPath('api/addUser'), {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});
        var res = JSON.parse(await response.text());

      // If username is already taken, display the error message
      if (res.error !== null)
      {
        setMessageSignup(res.error);
      }
      // If sign up is valid, store the user's information in local storage and redirect to the sign in page
      else
      {
        setMessageSignup('* Account created successfully. You may now proceed to log in *');
        
        var user = {firstName:res.firstName, lastName:res.lastName, email:res.email, user:res.user, password:res.password, id:res._id};
        localStorage.setItem('user_data', JSON.stringify(user));



        // Redirect to the home page
        window.location.href = '/';
      }
    }
    catch(e)
    {
      console.log(e.toString());
      return;
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
          <img id="spotifycodeImage" src={SpotifyCode} alt="Spotify Code Image"/>
        </div>
        <div class="form-group">
          <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signupUsername = c)}/>
        </div>
        <div id="passwordContainer" className="password-container">
          <div style={{position: 'relative'}}>
            <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="CREATE PASSWORD" ref={(c) => (signupPassword = c)} />
            <FontAwesomeIcon id="eyeIcon" icon={passwordShown ? faEye : faEyeSlash} onClick={() => setPasswordShown(!passwordShown)} className="toggle-password-icon"/>
          </div>
       </div>
        <div id="passwordContainer" className="password-container">
          <div style={{position: 'relative'}}>
            <input type={passwordShownConfirm ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="CONFIRM PASSWORD" ref={(c) => (signupPasswordConfirm = c)} />
            <FontAwesomeIcon id="eyeIcon" icon={passwordShownConfirm ? faEye : faEyeSlash} onClick={() => setPasswordShownConfirm(!passwordShownConfirm)} className="toggle-password-icon"/>
          </div>
       </div>
          <span id="errorMessageSignup" class="w-100 text-center" style={{color: "#FF0000"}}> {messageSignup}</span>
          <input id="signupButton"  type="submit" class="form-controlL btn-danger submit col-md-12" value="SIGN UP" onClick={doSignup}/>
      </form>
    </div>
  );
};

export default SignupPage;
