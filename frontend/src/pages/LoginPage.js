import React, {useState} from 'react';
// import styled from "styled-components";

const LoginPage = () =>
{
  var loginUsername;
  // const minUsernameLength = 2, maxUsernameLength = 20;
  var loginPassword;
  // const minPasswordLength = 6, maxPasswordLength = 20;

  let bp = require("./LoginPagePath.js");

  const [message, setMessage] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {setPasswordShown(!passwordShown);};

  const doLogin = async event => 
  {
    event.preventDefault();
    var obj = {login:loginUsername.value, password:loginPassword.value};

    // Check for empty fields
    if (obj.login == "" && obj.password == "")
    {
      setMessage("Please enter your username and password.");
      return;
    }
    if (obj.login == "")
    {
      setMessage("Please enter your username.");
      return;
    }
    if (obj.password == "")
    {
      setMessage("Please enter your password.");
      return;
    }

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
    <div id="loginDiv">
      <div class="LoginText">
        <form onSubmit={doLogin}>
          <h1 id="title">The Fridge</h1>
          <i id = "motto"> organize tasks with ease </i><br/><br/>
          <div class="form-group">
            <input
              type="text"
              class="form-control col-md-12"
              id="username"
              placeholder="USERNAME"
              ref={(c) => (loginUsername = c)}
            />
          </div>
          <div class="form-group">
            <input
              type={passwordShown ? "text" : "password"}
              class="form-control col-md-12"
              id="loginPassword"
              placeholder="PASSWORD"
              ref={(c) => (loginPassword = c)}
            />
          </div>
          <div class="form-group">
            <a class="changingTextColor right" href="/forgot-password">{" "} Forgot your password? </a>
          </div><br/>
          <input
            type="submit"
            id="loginButton"
            class="form-controlL btn-danger submit col-md-12"
            value="           SIGN IN           "
            onClick={doLogin}
          />
        </form>
        <span id="loginResult" class="w-100 text-center" style={{ color: "#ff3333" }}>
          {message}
        </span>
      </div>
    </div>
  );
};

export default LoginPage;