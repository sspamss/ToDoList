import React, {useState} from 'react';
import SignupPageStyling from './SignupPageStyling';
import SpotifyCode from '../graphics/SpotifyCode.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

// Function to handle the login page
const SignupPage = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");

  var signupFirstname, signupLastname, signupEmailaddress;
  const passwordRegex =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/, emailRegex = /^\S+@\S+\.\S+$/;
  var signupUsername; const minUsernameLength = 2, maxUsernameLength = 20;
  var signupPassword, signupPasswordConfirm; const minPasswordLength = 6, maxPasswordLength = 20;

  const [messageSignup, setMessageSignup] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShownConfirm, setPasswordShownConfirm] = useState(false);
  const [requirementsMet, setRequirementsMet] = useState({length: false, number: false, uppercase: false, lowercase: false, special: false});

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

    // Check if email is valid
    if (!emailRegex.test(obj.email)) {setMessageSignup("* Invalid email format *"); return;}

    // Check for any invalid characters
    if (obj.user.includes(" ")) {setMessageSignup("* Username cannot contain spaces *"); return;}
    if (obj.password.includes(" ")) {setMessageSignup("* Password cannot contain spaces *"); return;}

    // Check if the username and password is long enough
    if (obj.user.length < minUsernameLength || obj.user.length > maxUsernameLength)
      {setMessageSignup(`* Username must be between ${minUsernameLength} and ${maxUsernameLength} characters *`); return;}
    if (obj.password.length < minPasswordLength || obj.password.length > maxPasswordLength)
      {setMessageSignup(`* Password must be between ${minPasswordLength} and ${maxPasswordLength} characters *`); return;}

    // Check if the password meets the requirements
    if (!passwordRegex.test(obj.password)) {
      setMessageSignup("* Password does not meet requirements *"); return;}
      
    // Check if the password and password confirmation match
    if (obj.password !== signupPasswordConfirm.value) {setMessageSignup("* Passwords do not match *"); return;}

    var js = JSON.stringify(obj);

    // Send the login information to the backend and check if the sign in is valid
    try
    {
      const response = await fetch(bp.buildPath('api/addUser'), {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());

      // If username is already taken, display the error message
      if (res.error.length > 0) {setMessageSignup(res.error); return;}
      else
      {
        setMessageSignup(<span id="successMessagePopUp">* Account created successfully, email verification sent *</span>);

        const user = {firstName:res.firstName, lastName:res.lastName, email:res.email, user:res.user, password:res.password, id:res._id};
        localStorage.setItem('user_data', JSON.stringify(user));
        
        // Pause for 3 seconds before redirecting to the home page
        setTimeout(() => {window.location.href = '/';}, 5000);
      }
    }
    catch(e)
    {
      console.log(e.toString());
      return;
    }
  };

  // Function to handle the password requirement met
  const handlePasswordChange = (event) =>
  {
    const password = event.target.value;
  
    // Check if password meets requirements
    let newRequirementsMet = {length: false, number: false, uppercase: false, lowercase: false, special: false};
    if (password.length >= minUsernameLength && password.length <= maxUsernameLength) {newRequirementsMet.length = true;}
    if (/\d/.test(password)) {newRequirementsMet.number = true;}
    if (/[A-Z]/.test(password)) {newRequirementsMet.uppercase = true;}
    if (/[a-z]/.test(password)) {newRequirementsMet.lowercase = true;}
    if (/[^A-Za-z0-9]/.test(password)) {newRequirementsMet.special = true;}
    setRequirementsMet(newRequirementsMet);
  
    // Change bullet colors based on whether the password meets the requirements
    const bullets = document.querySelectorAll(".password-requirement-bullet");
    for (let i = 0; i < bullets.length; i++)
    {
      if (newRequirementsMet[bullets[i].dataset.requirement])
      {
        bullets[i].classList.add("password-requirement-bullet-met");
        bullets[i].classList.remove("password-requirement-bullet-unmet");}
      else 
      {
        bullets[i].classList.add("password-requirement-bullet-unmet");
        bullets[i].classList.remove("password-requirement-bullet-met");
      }
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
          <img id="spotifycodeImage" src={SpotifyCode} alt="Spotify Code"/>
        </div>
        <div class="form-group">
          <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signupUsername = c)}/>
        </div>
        <div className="form-group">
          <div id="passwordRequirementsBox" className="password-input-container">
            <input id="passwordField" type={passwordShown ? "text" : "password"} className="form-control col-md-12" placeholder="CREATE PASSWORD" ref={(c) => (signupPassword = c)} onChange={handlePasswordChange} />
            <FontAwesomeIcon id="eyeIcon" icon={passwordShown ? faEye : faEyeSlash} onClick={() => setPasswordShown(!passwordShown)} className="toggle-password-icon"/>
            <div id="passwordRequirementsText" className="tooltip">
              <p id="passwordRequirementsTitle">PASSWORD REQUIREMENTS:</p>
              <div id="passwordRequirementsList">
                <text className={requirementsMet.length ? "requirement-met" : ""}>• Must be between {minUsernameLength} and {maxUsernameLength} characters</text><br/>
                <text className={requirementsMet.number ? "requirement-met" : ""}>• Must contain at least one number</text><br/>
                <text className={requirementsMet.uppercase ? "requirement-met" : ""}>• Must contain at least one uppercase letter</text><br/>
                <text className={requirementsMet.lowercase ? "requirement-met" : ""}>• Must contain at least one lowercase letter</text><br/>
                <text className={requirementsMet.special ? "requirement-met" : ""}>• Must contain at least one special character</text><br/>
              </div>
            </div>
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