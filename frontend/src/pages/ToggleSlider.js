import React, {useState} from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import LoginPageStyling from './LoginPageStyling';
import SlidingAnimationStyling from './SlidingAnimationStyling';
import ToDoListPurple from '../graphics/ToDoListPurple.png';
// import ToggleSlider from './ToggleSlider';

// Function to handle the login page
const ToggleSlider = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");

<<<<<<< HEAD
  var signinUsername;
  var signinPassword;

=======
  // State variable to determine which page to display
>>>>>>> parent of c2401d7 (Update ToggleSlider.js)
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
            style={{backgroundColor: isSignInActive ? '#9736C5' : 'transparent', color: isSignInActive ? '#FFFFFF' : '#000000'}}>SIGN IN
          </button>
          <button
            id="toggleSignup"
            onClick={() => setIsSignInActive(false)}
            style={{backgroundColor: !isSignInActive ? '#9736C5' : 'transparent', color: !isSignInActive ? '#FFFFFF' : '#000000'}}>SIGN UP
          </button>
          <button id="toggleCurrent" style={{left: isSignInActive ? 0 : 'auto', right: isSignInActive ? 'auto' : 0}} onClick={toggleCurrent}>
            {isSignInActive ? 'SIGN IN' : 'SIGN UP'}
          </button>
        </div>

          {/* Calling the respective pages */}
          {isSignInActive ? (<LoginPage/>) : (<SignupPage/>)
        }
      </div>
    </div>
  );
};

export default ToggleSlider;