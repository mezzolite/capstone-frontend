import React, { Component } from 'react';
// import './App.css';
import SignUpForm from './Components/SignUpForm'

const avatarURL = "http://localhost:3000/avatars"


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

  render(){
    return (
      <div className="App">
        {!this.state.loggedIn
          ?<SignUpForm avatars={this.state.avatars} />
          : null
        }
        
      </div>
    );
  }
}

export default App;
