import React from 'react';
import {withRouter, Link} from 'react-router-dom'

const LogInForm = ({history, logInUser, loggedIn}) => {

  const handleSubmit = (event) => {
        event.preventDefault() 
        const formData = new FormData(event.target)
        const username = formData.get('username')
        const password = formData.get('password')
    
        logInUser({username, password})
        if(loggedIn === true){
          history.push("/home")
        }
        event.target.reset()
      }


  return(
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <ul>
        <li>
          <label for="username">Username</label>
          <input type="text" name="username"/>
        </li>
        <li>
          <label for="password">Password</label>
          <input type="password" name="password"/>
        </li>
        <li className="submit-button">
          <input type="submit" value="Log In" />
        </li>
        <li>
          <Link className="sign-up-link" to="/sign_up">Don't have an account? Sign Up </Link>
        </li>
      </ul>
    </form>
  )
}

export default withRouter(LogInForm);