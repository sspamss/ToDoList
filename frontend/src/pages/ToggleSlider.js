// import React, {useState} from 'react';
// import LoginPageStyling from './LoginPageStyling';
// import SlidingAnimationStyling from './SlidingAnimationStyling';

// // Function to handle the login page
// const ToggleSlider = () =>
// {
//   const [isSignInActive, setIsSignInActive] = useState(true);

//   // Function to toggle between the sign in and sign up forms
//   const toggleCurrent = () => {setIsSignInActive(!isSignInActive);};

//   // Returns the content of the login page
//   return (
//     <div>
//       <LoginPageStyling/>
//       <SlidingAnimationStyling/>
//       <div id="signinBackground">
//         <div id="toggleSlider">
//           <button
//             id="toggleSignin"
//             onClick={() => setIsSignInActive(true)}
//             style={{ backgroundColor: isSignInActive ? '#9736C5' : 'transparent', color: isSignInActive ? '#FFFFFF' : '#000000' }}>SIGN IN
//           </button>
//           <button
//             id="toggleSignup"
//             onClick={() => setIsSignInActive(false)}
//             style={{ backgroundColor: !isSignInActive ? '#9736C5' : 'transparent', color: !isSignInActive ? '#FFFFFF' : '#000000' }}>SIGN UP
//           </button>
//           <button id="toggleCurrent" style={{ left: isSignInActive ? 0 : 'auto', right: isSignInActive ? 'auto' : 0 }} onClick={toggleCurrent}>
//             {isSignInActive ? 'SIGN IN' : 'SIGN UP'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToggleSlider;
