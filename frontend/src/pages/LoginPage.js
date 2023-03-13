import React, {useEffect, useState} from 'react';
import Login from '../components/Login';

const LoginPage = () =>
{
  const MINPASSWORDLENGTH = 6;
  const MAXPASSWORDLENGTH = 20;
  const [password, passwordSet] = useState('');
  const [passwordError, passwordErrorSet] = useState({password: 'false', showPassword: false});
  const [invalidPassword, invalidPasswordSet] = useState({state: false, text: ''});
  const [email, emailSet] = useState('');
  const [emailError, emailErrorSet] = useState({state: false, text: ''});



    return(
        <div>
          <Login/>
        </div>
    );
};

export default LoginPage;