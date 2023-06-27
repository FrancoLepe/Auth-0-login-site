import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty'

const Profile= () => {
    const { user, isAuthenticated } = useAuth0()

    return (
        isAuthenticated && (
        <div>
            <br></br>
            <img src={user.picture} alt={user.name} className='profilePicture'/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <a className="App-link"
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
        </a>
        </div>
    ))
}

export default Profile;