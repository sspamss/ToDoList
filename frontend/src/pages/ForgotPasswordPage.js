/*import React, {useState} from 'react';
import ForgotPasswordPageStyling from './ForgotPasswordPageStyling';
import WingedEmail from '../graphics/WingedEmail.png';

// Function to handle the login page
const ForgotPasswordPage = () =>
{
  // Import the path to the backend
  let bp = require("./LoginPagePath.js");
  var newSigninUsername;
  var emailAddress;

  const [message, setMessage] = useState('');
  const doForgotPassword = async event => {
    event.preventDefault();
    var obj = {user:newSigninUsername.value, email:emailAddress.value};
    // Check for any empty fields
    if (obj.user === "" && obj.email === "") {setMessage("* Please enter your username and email *"); return;}
    if (obj.user === "") {setMessage("* Please enter your username *"); return;}
    if (obj.email === ""){setMessage("* Please enter your email *"); return;}
    console.log(obj.user);
    console.log(obj.email); 
    var js = JSON.stringify(obj);
    console.log(js)

    const response = await fetch(bp.buildPath('api/valid'),{method:'POST', body:js, headers:{'Content-Type':'application/json'}});
    var res = JSON.parse(await response.text());
    
    console.log(res._id);
    console.log(res.email);
      
    // If sign in is invalid, display an error message
    if (res._id <= 0){
      setMessage("* Username or email is incorrect *");
      return;
    }
      
    // If sign in is valid, store the user's information in local storage and redirect to the home page
    else{
      //changes the message to sending the email
      setMessage("* Email has been sent *");
    
      //sends email
      const response = await fetch(bp.buildPath('api/sendemail'), {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});
      var res = JSON.parse(await response.text());
      console.log(res.email);
    }
  };

  // Returns the content of the login page
  return (
    <div>
      <ForgotPasswordPageStyling/>
      <div id="forgotpasswordBackground">
        <div class="forgotpasswordContents">
          <form onSubmit={doForgotPassword}>
            <p id="passwordReset">RESET PASSWORD</p>
            <p id = "resetInstructions">Reset instructions will be emailed to you.</p>
            <div class="form-group">
              <input id="usernameField" type="text" class="form-control col-md-12" placeholder="USERNAME" ref={(c) => (newSigninUsername = c)}/>
            </div>
            <div class="form-group">
              <input id="emailField" type="text" class="form-control col-md-12" placeholder="EMAIL ADDRESS" ref={(c) => (emailAddress = c)}/>
            </div>
            <div class="form-group">
              <a href='/' id="backToSignIn">Back to sign in</a><br/>
            </div>
            <div class="form-group">
              <img id="wingedEmail" src={WingedEmail} alt="Winged Email"/>
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
*/
