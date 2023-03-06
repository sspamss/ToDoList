import React from 'react';
import PageTitle from '../components/PageTitle';
import PageMotto from '../components/PageMotto';
import Login from '../components/Login';

const LoginPage = () =>
{

    return(
      <div>
        <PageTitle/>
        <PageMotto/>
        <Login/>
      </div>
    );
};

export default LoginPage;