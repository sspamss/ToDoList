import React, {useState} from 'react';
import LoginPageStyling from './LoginPageStyling';
import ToDoListPurple from '../graphics/ToDoListPurple.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Function to handle the login page
const LoginPage = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");

  const [messageSignin, setMessageSignin] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  var signinUsername, signinPassword;

  // Function to handle the sign in form
  const doSignin = async event => 
  {
    event.preventDefault();
    var obj = {user:signinUsername.value, password:signinPassword.value};

    // Check for any empty fields
    if (obj.user === "" && obj.password == "") {setMessageSignin("* Please enter your username and password *"); return;}
    if (obj.user === "") {setMessageSignin("* Please enter your username *"); return;}
    if (obj.password === "") {setMessageSignin("* Please enter your password *"); return;}

    var js = JSON.stringify(obj);

    // Send the login information to the backend and check if the log in is valid
    try
    {
      const response = await fetch(bp.buildPath("api/login"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      var res = JSON.parse(await response.text());
      
      
      // If sign in is invalid, display an error message
      if (res._id <= 0)
      {
        setMessageSignin("* Username or password is incorrect *");
      }
      /*
      if(res.verified==false){
        setMessageSignin("* this account has yet to be verified resending email now *");
        await fetch(bp.buildPath("api/emailVerification"),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      }
      */
      // If sign in is valid, store the user's information in local storage and redirect to the home page
      else
      {
        var user = {firstName:res.firstName, lastName:res.lastName, user:signinUsername.value}
        localStorage.setItem('user_data', JSON.stringify(user));

        // Clear the error message
        setMessageSignin("");

        // Redirect to the home page
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
      <form id="doSignin" onSubmit={doSignin}>
        <div class="form-group">
          <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (signinUsername = c)}/>
        </div>
        <div id="passwordContainer" className="password-container">
          <div style={{position: 'relative'}}>
            <input type={passwordShown ? "text" : "password"} className="form-control col-md-12" id="passwordField" placeholder="PASSWORD" ref={(c) => (signinPassword = c)} />
            <FontAwesomeIcon id="eyeIcon" icon={passwordShown ? faEye : faEyeSlash} onClick={() => setPasswordShown(!passwordShown)} className="toggle-password-icon"/>
          </div>
       </div>
        <div class="form-group">
          <a href='/forgot-password' id="forgotPassword">Forgot your password?</a>
        </div>
        <div class="form-group">
          <img id="todolistpurple" src={ToDoListPurple} alt="To Do List"/>
        </div>
        <span id="errorMessage" class="w-100 text-center" style={{color: "#FF0000"}}> {messageSignin}</span>
        <input id="signinButton"  type="submit" class="form-controlL btn-danger submit col-md-12" value="SIGN IN" onClick={doSignin}/>
      </form>
    </div>
  );
};

export default LoginPage;
