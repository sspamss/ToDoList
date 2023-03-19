import React, { useState } from 'react';
import LoginPage from './LoginPage';

const SlidingAnimation = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.doSignin(event);
  };

  const handleToggle = (event) => {
    setIsLogin(event.target.id === 'login');
  };
  
  return (
    <div className="sliding-animation">
      <div className={`form-container ${isLogin ? 'login' : 'signup'}`}>
        {isLogin ? (
          <form onSubmit={handleSubmit}>
            // Login form fields and submit button
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            // Signup form fields and submit button
          </form>
        )}
      </div>
      <div className="toggle-container">
        <button
          type="button"
          id="login"
          className={`${isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Login
        </button>
        <button
          type="button"
          id="signup"
          className={`${!isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default SlidingAnimation;