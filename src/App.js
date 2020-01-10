import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoggedInHomePage from './Components/LoggedInHomePage';
import StartPage from './Components/StartPage';
import SignUpForm from './Components/SignUpForm';
import LogInForm from './Components/LogInForm'

const avatarURL = "http://localhost:3000/avatars"
const userURL = "http://localhost:3000/users"


class App extends Component {

  state = {
    loggedIn: false,
    avatars: [],

  }

  componentDidMount(){
    fetch(avatarURL)
      .then(response => response.json())
      .then(avatars => this.setState({avatars}))
  }

  addUser = (user) => {
    fetch(userURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  logIn = () => {
    this.setState({loggedIn: true})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route 
              exact path="/"
              component={StartPage}/>
            <Route 
              path="/sign_up" 
              render={() => <SignUpForm 
                                avatars={this.state.avatars} 
                                addUser={this.addUser} 
                                logIn={this.logIn}
                            />
                      } 
            />
            <Route
              path='/login'
              render={() => <LogInForm />}
              />
          </Switch>
        </div>
      </Router>

      
    );
  }
}

export default App;
