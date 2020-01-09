import React, { Component } from 'react';
// import './App.css';
import SignUpForm from './Components/SignUpForm'

const avatarURL = "http://localhost:3000/avatars"
const userURL = "http://localhost:3000/users"


class App extends Component {

  state = {
    loggedIn: false,
    avatars: []
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

  render(){
    return (
      <div className="App">
        {!this.state.loggedIn
          ?<SignUpForm avatars={this.state.avatars} addUser={this.addUser} />
          : null
        }
        
      </div>
    );
  }
}

export default App;
