import React, { useState } from 'react';

function Login()
{
  var loginUsername;
  var loginPassword;
  const [message,setMessage] = useState('');
  const doLogin = async event => 
  {
    event.preventDefault();
    var obj = {login:loginUsername.value,password:loginPassword.value};
    var js = JSON.stringify(obj);

    try
    {    
      const response = await fetch('http://localhost:5050/api/login', {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      var res = JSON.parse(await response.text());

      if( res.id <= 0 )
      {
        setMessage('Username or Password is incorrect.');
      }
      else
      {
        var user = {firstName:res.firstName, lastName:res.lastName, id:res.id}
        localStorage.setItem('user_data', JSON.stringify(user));

        setMessage('');
        window.location.href = '/cards';
      }
    }
    catch(e)
    {
      alert(e.toString());
      return;
    }    
  };

  const doForgot = async event =>
  {
    event.preventDefault();
  }

  return(
    <div id = "loginDiv">
      <h1 id="title">The Fridge List</h1>
      <i id="motto">organize tasks with ease</i>
      <form onSubmit = {doLogin}><br/>
        <input type="username" id = "loginUsername" placeholder = "USERNAME" 
          ref = {(c) => loginUsername = c}/><br/>
        <input type="password" id = "loginPassword" placeholder = "PASSWORD" 
          ref = {(c) => loginPassword = c}/><br/>
        <a href = "/forgot-password">Forgot your password?</a><br/><br/>
        <input type="submit" id = "loginButton" class = "buttons" value = "SIGN IN" onClick = {doForgot}/>
      </form>
      <span id = "loginResult">{message}</span>
    </div>
  );  
};

export default Login;