import React, {useState} from 'react';
import LoginPageStyling from './LoginPageStyling';
import ToDoListPurple from '../graphics/ToDoListPurple.png';

const LoginPage = () =>
{
  var signinUsername;
  // const minUsernameLength = 2, maxUsernameLength = 20;
  var signinPassword;
  // const minPasswordLength = 6, maxPasswordLength = 20;

  let bp = require("./LoginPagePath.js");

  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {setPasswordShown(!passwordShown);};

  const doSignin = async event => 
  {
    event.preventDefault();
    var obj = {login:signinUsername.value, password:signinPassword.value};

    // Check for any empty fields
    if (obj.login == "" && obj.password == "") {setMessage("* Please enter your username and password. *"); return;}
    if (obj.login == "") {setMessage("* Please enter your username. *"); return;}
    if (obj.password == ""){setMessage("* Please enter your password. *"); return;}

    var js = JSON.stringify(obj);

    try
    {    
      const response = await fetch(bp.buildPath("api.login"),{
        method:'POST',
        body:js,
        headers:{'Content-Type':'application/json'}
      });

      var res = JSON.parse(await response.text());

      if (res.id <= 0)
      {
        setMessage(res.error);
      }
      else
      {
        var user = {firstName:res.firstName, lastName:res.lastName, id:res.id}
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

  return (
    <div>
      <LoginPageStyling/>
      <div id="signinBackground">
        <div id="signinText" class="SigninText">
          <form onSubmit={doSignin}>
            <h1 id="title">The Fridge To Do</h1>
            <i id = "motto">organize tasks with ease</i><br/><br/>
            <div class="form-group">
              <input
                type="text"
                class="form-control col-md-12"
                id="username"
                placeholder="USERNAME"
                ref={(c) => (signinUsername = c)}
              />
            </div>
            <div class="form-group">
              <input
                type={passwordShown ? "text" : "password"}
                class="form-control col-md-12"
                id="password"
                placeholder="PASSWORD"
                ref={(c) => (signinPassword = c)}
              />
            </div>
            <div class="form-group">
              <a id="forgotPassword" href="/forgot-password">{" "} Forgot your password? <br/></a>
            </div>
            <div class="form-group">
              <img id="todolistpurple" src={ToDoListPurple} alt="To-Do List Purple"/>
            </div>
              <span id="loginResult" class="w-100 text-center" style={{ color: "#FFFFFF" }}> {message}</span><br/>
              <input
                type="submit"
                id="signinButton"
                class="form-controlL btn-danger submit col-md-12"
                value="SIGN IN"
                onClick={doSignin}
              />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;            