import React, {useEffect, useState} from 'react';

const LoginPage = () =>
{
  var loginUsername;
  const minUsernameLength = 2, maxUsernameLength = 20;

  var loginPassword;
  const minPasswordLength = 6, maxPasswordLength = 20;
  const [password, passwordSet] = useState('');
  const [passwordError, passwordErrorSet] = useState({password: 'false', showPassword: false});
  const [invalidPassword, invalidPasswordSet] = useState({state: false, text: ''});

  const [email, emailSet] = useState('');
  const [emailError, emailErrorSet] = useState({state: false, text: ''});

  const [message, setMessage] = useState('');
  const doLogin = async event => 
  {
    event.preventDefault();
    var obj = {login:loginUsername.value, password:loginPassword.value};
    var js = JSON.stringify(obj);

    try
    {    
      const response = await fetch('http://localhost:5050/api/login', {method:'POST', body:js, headers:{'Content-Type':'application/json'}});
      var res = JSON.parse(await response.text());

      if (res.id <= 0)
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

  return(
    <div id = "loginDiv">
      <h1 id = "title"> The Fridge List </h1>
      <i id = "motto"> organize tasks with ease </i>
      <form onSubmit = {doLogin}> <br/>
      <input type="username" id = "loginUsername" placeholder = "USERNAME" 
        ref = {(c) => loginUsername = c}/><br/>
      <input type="password" id = "loginPassword" placeholder = "PASSWORD" 
        ref = {(c) => loginPassword = c}/><br/>
      <a href = "/forgot-password"> Forgot your password? </a><br/><br/>
      <input type = "submit" id = "loginButton" class = "buttons" value = "           SIGN IN           " onClick = {doLogin}/>
      </form>
    </div>
  );
};

export default LoginPage;