import logo from './Auth0-transparent.png';
import React from 'react'
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading }=useAuth0;
  
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <LoginButton />
      <LogoutButton />
      <Profile />
      <br>
      </br>
      
      {/* <a className="App-link"
          href="https://www.linkedin.com/in/francolepe/"
          target="_blank"
          rel="noopener noreferrer">
          Check out my LinkedIn
        </a>
        <br>
        </br>
        <a className="App-link"
          href="https://github.com/FrancoLepe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my GitHub
        </a> */}
        <br></br>
        <br></br>
        </header>
    </div>
  );
}

export default App;


// {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is my Auth-0 login practice app
//         </p>
//         <a
//           className="App-link"
//           href="https://www.linkedin.com/in/francolepe/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Check out my LinkedIn
//         </a>
//         <br>
//         </br>
//         <a
//           className="App-link"
//           href="https://github.com/FrancoLepe"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Check out my GitHub
//         </a>
//       </header>
//     </div> */}