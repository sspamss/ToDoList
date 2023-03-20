import React, {useState} from 'react';
import LoginPageStyling from './LoginPageStyling';
import SlidingAnimation from './SlidingAnimation';
import SlidingAnimationStyling from './SlidingAnimationStyling';
import ToDoListPurple from '../graphics/ToDoListPurple.png';
import {BiEye, BiEyeSlash} from 'react-icons/bi';

// Function to handle the login page
const LoginPage = () =>
{
  let bp = require("./LoginPagePath.js");

  var signinUsername; const minUsernameLength = 2, maxUsernameLength = 20;
  var signinPassword; const minPasswordLength = 6, maxPasswordLength = 20;

  const [isSignInActive, setIsSignInActive] = useState(true);
  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const toggleCurrent = () => {setIsSignInActive(!isSignInActive);};
  const togglePassword = () => {setPasswordShown(!passwordShown);};

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
      const response = await fetch(bp.buildPath("api/login"),{
        method:'POST',
        body:js,
        headers:{'Content-Type':'application/json'}
      });


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
            style={{ backgroundColor: isSignInActive ? '#9736C5' : 'transparent', color: isSignInActive ? '#FFFFFF' : '#000000' }}
          >
            SIGN IN
          </button>
          <button
            id="toggleSignup"
            onClick={() => setIsSignInActive(false)}
            style={{ backgroundColor: !isSignInActive ? '#9736C5' : 'transparent', color: !isSignInActive ? '#FFFFFF' : '#000000' }}
          >
            SIGN UP
          </button>
          <button id="toggleCurrent" style={{ left: isSignInActive ? 0 : 'auto', right: isSignInActive ? 'auto' : 0 }} onClick={toggleCurrent}>
            {isSignInActive ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>
        <form onSubmit={doSignin}>
          {/* <h1 id="signin">SIGN IN</h1> */}
          <div class="form-group">
            <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signinUsername = c)}/>
          </div>
          <div id="passwordContainer" className="password-container">
            <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="PASSWORD" ref={(c) => (signinPassword = c)}/>
            {/* <i className={`password-icon ${passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}`} onClick={togglePassword}/> */}
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
      </div>
    </div>
  );
};

export default LoginPage;
