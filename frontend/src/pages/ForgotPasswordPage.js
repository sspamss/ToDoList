import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

const ForgotPasswordPage = () =>
{
  var loginUsername;
  var loginPassword;
  const [message, setMessage] = useState('');

  const [values, setValues] = useState({
      password:'',
      showPassword: false,
      confirm: '',
      showConfirm: false
  });

  const [errorMessage, errorMessageSet] = useState(false);

  // Show password for the password field
  const handleClickShowPassword = () => {setValues({...values, showPassword: !values.showPassword,});};

  // Show password for the confirm password field
  const handleClickShowConfirm = () => {setValues({...values, showConfirm: !values.showConfirm,});};

  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {setAgree(!agree);}
  const handleMouseDown = (event) => {event.preventDefault();};
  const handleMouseDownConfirm = (event) => {event.preventDefault();};

  // Stores the password in the password variable
  const tryNewPassword = (prop) => (event) => {setValues({ ...values, [prop]: event.target.value });};
  function valid()
  {
    if(values.password !== values.confirm) return false;
    else if(values.password === values.confirm) return true;
  }

  //error messages
  const [pwdError, setPwdError] = useState({state: false, text: ""});
  const [confirmError, setconfirmError] = useState({state: false, text: ""});
  const [confirmName, setConfirmName] = useState({state: false, text: ""});
  const [complexity, setComplexity] = useState({state: false, text: ""});

  //submit handeler
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false); window.location.href='/Login';};

  function handleSubmitButton(event)
  {
    event.preventDefault();
    errorMessageSet(false);
    setPwdError({state: false, text: ""});
    setconfirmError({state: false, text: ""});
    setConfirmName({state: false, text: ""});
    setComplexity({state: false, text: ""});

    const re = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    const isOk = re.test(values.password);


    if (valid() && isOk)
    {
    }
    else if (valid() !== true){setconfirmError(
    {
      state: true,
      text: "Passwords do not match."
    });}
    else if (!isOk) {setComplexity({
      state: true,
      text: "Password strength is not strong enough."
    });}
  }

  return(
    <div id = "loginDiv">
      <h1 id = "title"> The Fridge List </h1>
      <i id = "motto"> organize tasks with ease </i>
      <h4 id = "reset"> Password Reset </h4>
      <input type="username" id = "loginUsername" placeholder = "USERNAME" 
        ref = {(c) => loginUsername = c}/><br/>
      <input type="password" id = "loginPassword" placeholder = "PASSWORD" 
        ref = {(c) => loginPassword = c}/><br/><br/>
      <input type="password" id = "loginPassword" placeholder = "CONFIRM PASSWORD" 
        ref = {(c) => loginPassword = c}/><br/><br/>
      <input type = "submit" id = "loginButton" class = "buttons" value = " RESET PASSWORD " onClick = {ForgotPasswordPage}/>
    </div>
  );
};

export default ForgotPasswordPage;