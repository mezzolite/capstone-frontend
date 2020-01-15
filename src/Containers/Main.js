import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter} from 'react-router-dom';
import LoggedInHomePage from '../Components/LoggedInHomePage';
import StartPage from '../Components/StartPage';
import SignUpForm from '../Components/SignUpForm';
import LogInForm from '../Components/LogInForm'

const avatarURL = "http://localhost:3000/avatars"
const userURL = "http://localhost:3000/users"
const loginURL = "http://localhost:3000/login"

class Main extends Component {

  state = {
    loggedIn: false,
    avatars: [],
    users: [],
    loggedInUser: null,
    loggedInAvatar: null,
    mainAvatar: null
  }

 componentDidMount(){
   Promise.all([fetch(avatarURL), fetch(userURL)])
    .then(([res1, res2]) => {
      return Promise.all([res1.json(), res2.json()])
    })
    .then(([res1, res2]) => {
      this.setState({
        avatars: res1,
        users: res2
      })
    })
    .then(
      () =>{
        this.getMainAvatar()
      }
    )
    .then(() => {
      this.toggleIsLoggedIn()
    })
 }

  addUser = (user) => {
    this.setState({users: [...this.state.users, user]})
    
    fetch(userURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  logInUser = (user) => {
    fetch(loginURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(result => {
        if (result.error){
          alert(result.error)
        } else {
          localStorage.setItem('token', result.token)
          localStorage.setItem('username', JSON.stringify(user.username))
        }
      }) 
      .then(()=>{
        this.toggleIsLoggedIn()
      })
  }

  toggleIsLoggedIn = () => {
    const token = localStorage.getItem('token')
    const username = JSON.parse(localStorage.getItem('username'))

    if(token && username){
      this.setState({
        loggedIn: true,
        loggedInUser: this.state.users.find(user => user.username === username)
      })
    } 
    if(this.state.loggedInUser){
      const avatar = this.state.avatars.find(avatar => avatar.id === this.state.loggedInUser.avatar_id)
      this.setState({
        loggedInAvatar: avatar
      })
    }
  }

  logOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')

    this.setState({ loggedIn: false})
  }

  getMainAvatar = () => {
    this.setState({mainAvatar: this.state.avatars.find(avatar => avatar.name === "pink hair")})
  }

  logIn = () => {
    this.setState({loggedIn: true})
  }


  render(){

    return (
       
        <div className="App">
          <Switch>
            <Route 
              path="/sign_up" 
              render={() => <SignUpForm 
                                avatars={this.state.avatars} 
                                addUser={this.addUser} 
                            />
                      } 
            />
            <Route
              path='/login'
              render={() => <LogInForm 
                                logInUser={this.logInUser}
                                loggedIn={this.state.loggedIn}
                            />}
              />
            <AuthenticatedRoute
              path='/home'
              component={() => <LoggedInHomePage 
                                avatar={this.state.loggedInAvatar}
                                logOut={this.logOut} />}
            />
            <Route exact path="/">
            {this.state.loggedIn === true
              ? <Redirect to="/home"/> 
              : <StartPage avatar={this.state.mainAvatar}/>}
            </Route>
          
          </Switch>
        </div>

      
    );
  }
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default Main;
