import React from 'react';

const HomePageStyling = () => {
    return (
      <div dangerouslySetInnerHTML={{
        __html: `
          <!-- Login Form -->
          <style>
  
            /* Setting the website's background */
            body {
              background-color: #F6F6EF;
            }
  
            
  
          </style>
          <!-- End Login Form -->
        `
      }} />    
    );
  };