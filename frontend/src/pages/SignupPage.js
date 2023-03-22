// // Check if the username and password is long enough
// if (obj.login.length < minUsernameLength || obj.login.length > maxUsernameLength)
//   {setMessage(`* Username must be between ${minUsernameLength} and ${maxUsernameLength} characters long. *`); return;}
// if (obj.password.length < minPasswordLength || obj.password.length > maxPasswordLength)
//   {setMessage(`* Password must be between ${minPasswordLength} and ${maxPasswordLength} characters long. *`); return;}


import React, {useState} from 'react';
import LoginPageStyling from './LoginPageStyling';
import SlidingAnimationStyling from './SlidingAnimationStyling';
import ToDoListPurple from '../graphics/ToDoListPurple.png';
// import ToggleSlider from './ToggleSlider';

// Function to handle the login page
const LoginPage = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");

  var signinUsername, signupUsername; const minUsernameLength = 2, maxUsernameLength = 20;
  var signinPassword, signupPassword, signupPasswordConfirm; const minPasswordLength = 6, maxPasswordLength = 20;

  const [isSignInActive, setIsSignInActive] = useState(true);
  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);


  // Function to toggle between the sign in and sign up forms
  const toggleCurrent = () => {setIsSignInActive(!isSignInActive);};

  // Function to toggle the visibility of the password
  const togglePassword = () => {setPasswordShown(!passwordShown);};

  // Function to handle the sign in form
  const doSignin = async event => 
  {
    event.preventDefault();
    var obj = {user:signinUsername.value, password:signinPassword.value};

    // Check for any empty fields
    if (obj.user == "" && obj.password == "") {setMessage("* Please enter your username and password *"); return;}
    if (obj.user == "") {setMessage("* Please enter your username *"); return;}
    if (obj.password == "") {setMessage("* Please enter your password *"); return;}

    var js = JSON.stringify(obj);

    // Send the login information to the backend and check if the login is valid
    try
    {
      // Check if the username is valid
      const response = await fetch(bp.buildPath("api/login"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      var res = JSON.parse(await response.text());
      
      // If the login is invalid, display an error message
      if (res._id <= 0)
      {
        setMessage(res.error);
      }
      // If the login is valid, store the user's information in local storage and redirect to the home page
      else
      {
        var user = {firstName:res.firstName, lastName:res.lastName, id:res._id}
        localStorage.setItem('user_data', JSON.stringify(user));
        setMessage('');
        window.location.href = '/home';
      }
    }
    catch(e)
    {
      console.log(e.toString());
      return;
    }    
  };

  // Function to handle the sign up form
  const doSignup = async event => 
  {
    event.preventDefault();
    var obj = {user:signupUsername.value, password:signupPassword.value, passwordConfirm:signupPasswordConfirm.value};

    // Check for any empty fields
    if (obj.user == "" && obj.password == "") {setMessage("* Please enter your username and password *"); return;}
    if (obj.user == "") {setMessage("* Please enter your username *"); return;}
    if (obj.password == "") {setMessage("* Please enter your password *"); return;}   
  };

  // Returns the content of the login page
  return (
    <div>
      <LoginPageStyling/>
      <SlidingAnimationStyling/>
      <div id="signinBackground">

        <div id="toggleSlider">
          <button
            id="toggleSignin"
            onClick={() => setIsSignInActive(true)}
            style={{ backgroundColor: isSignInActive ? '#9736C5' : 'transparent', color: isSignInActive ? '#FFFFFF' : '#000000' }}>SIGN IN
          </button>
          <button
            id="toggleSignup"
            onClick={() => setIsSignInActive(false)}
            style={{ backgroundColor: !isSignInActive ? '#9736C5' : 'transparent', color: !isSignInActive ? '#FFFFFF' : '#000000' }}>SIGN UP
          </button>
          <button id="toggleCurrent" style={{ left: isSignInActive ? 0 : 'auto', right: isSignInActive ? 'auto' : 0 }} onClick={toggleCurrent}>
            {isSignInActive ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>

          {isSignInActive ? (
            <form id="doSignin" onSubmit={doSignin}>
              <div class="form-group">
                <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signinUsername = c)}/>
              </div>
              <div id="passwordContainer" className="password-container">
                <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="PASSWORD" ref={(c) => (signinPassword = c)}/>
              </div>
              <div class="form-group">
                <a href='/forgot-password' id="forgotPassword">Forgot your password?</a>
              </div>
              <div class="form-group">
                <img id="todolistpurple" src={ToDoListPurple} alt="To Do List Image"/>
              </div>
              <span id="errorMessage" class="w-100 text-center" style={{color: "#FFFFFF"}}> {message}</span>
              <input id="signinButton"  type="submit" class="form-controlL btn-danger submit col-md-12" value="SIGN IN" onClick={doSignin}/>
            </form>
          ) : (
            <form id="doSignup" onSubmit={doSignup}>
              <div class="form-group">
                <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signupUsername = c)}/>
              </div>
              <div id="passwordContainer" className="password-container">
                <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="CREATE PASSWORD" ref={(c) => (signupPassword = c)}/>
              </div>
              <div id="passwordContainer" className="password-container">
                <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordConfirmField" placeholder="CONFIRM PASSWORD" ref={(c) => (signupPassword = c)}/>
              </div>
              <span id="errorMessage" class="w-100 text-center" style={{color: "#FFFFFF"}}> {message}</span>
              <input id="signinButton"  type="submit" class="form-controlL btn-danger submit col-md-12" value="SIGN IN" onClick={doSignup}/>
            </form>
          )
        }
      </div>
    </div>
  );
};

export default LoginPage;
