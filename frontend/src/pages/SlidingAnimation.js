import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SlidingAnimationStyling from './SlidingAnimationStyling';

const FormSlider = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.doSignin(event);
  }

  const handleToggle = (event) => {
    setIsLogin(event.target.id === 'login');
  }

  return (
    <div className="formSlider">
      <div className="title-text">
        <div
          className={`title ${isLogin ? 'login' : 'signup'}`}> {isLogin ? 'Login' : 'Signup'}
        </div>
        <div
          className={`title ${!isLogin ? 'login' : 'signup'}`}> {isLogin ? 'Signup' : 'Login'}
        </div>
      </div>
      {/* <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" checked={isLogin} onChange={handleToggle} />
          <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={handleToggle} />
          <label htmlFor="login" className={`slide login ${isLogin ? 'active' : ''}`}>Login</label>
          <label htmlFor="signup" className={`slide signup ${!isLogin ? 'active' : ''}`}>Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <div className={`login ${isLogin ? '' : 'hidden'}`}>
            <pre></pre>
            <div className="field">
              <input type="text" id="loginName" placeholder="Username" required />
            </div>
            <div className="field">
              <input type="password" id="loginPassword" placeholder="Password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" onClick={doLogin} />
            </div>
            <span className="text" id="loginResult"></span>
          </div>
          <div className={`signup ${!isLogin ? '' : 'hidden'}`}>
            <div className="field">
              <input type="text" id="LoginName" placeholder="Username" required />
            </div>
            <div className="field">
              <input type="password" id="LoginPassword" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
            </div>
            <div className="field">
              <input type="text" id="FirstName" placeholder="First Name" required />
            </div>
            <div className="field">
              <input type="text" id="LastName" placeholder="Last Name" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" onClick={doSignup} />
            </div>
            <span className="text" id="signupResult"></span>
          </div>
        </div>
      </div> */}
    </div>
  );
};