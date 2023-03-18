import React from 'react';

const SlidingAnimationStyling = () => {
  return (
    <div dangerouslySetInnerHTML={{
      __html: `
        <!-- Login Form -->
        <style>

        .login-form-container {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s ease-in-out;
        }
        
        .sign-up-mode {
          transform: translateX(-100%);
        }
        
        .login-form-container.sign-up-mode {
          transform: translateX(100%);
        }             

        </style>
        <!-- End Login Form -->
      `
    }} />    
  );
};

export default SlidingAnimationStyling;