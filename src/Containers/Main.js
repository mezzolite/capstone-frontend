import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import LoggedInHomePage from '../Components/LoggedInHomePage';
import StartPage from '../Components/StartPage';
import SignUpForm from '../Components/SignUpForm';
import LogInForm from '../Components/LogInForm'

const avatarURL = "http://localhost:3000/avatars"
const userURL = "http://localhost:3000/users"
const loginURL = "http://localhost:3000/login"
const actionURL = "http://localhost:3000/actions"
const userActionsURL = "http://localhost:3000/user-actions"

// const avatarURL ='https://imp-politic.herokuapp.com/avatars'
// const userURL = 'https://imp-politic.herokuapp.com/users'
// const loginURL = 'https://imp-politic.herokuapp.com/login'
// const actionURL = 'https://imp-politic.herokuapp.com/actions'
// const userActionsURL = 'https://imp-politic.herokuapp.com/user-actions'

class Main extends Component {

  state = {
    loggedIn: false,
    avatars: [],
    users: [],
    actions: [],
    loggedInUser: null,
    loggedInAvatar: null,
    mainAvatar: null
  }

 componentDidMount(){
   Promise.all([fetch(avatarURL), fetch(userURL), fetch(actionURL)])
    .then(([res1, res2, res3]) => {
      return Promise.all([res1.json(), res2.json(), res3.json()])
    })
    .then(([res1, res2, res3]) => {
      this.setState({
        avatars: res1,
        users: res2,
        actions: res3
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

//  shouldComponentUpdate(nextProps, nextState) {
//   if (this.state.loggedInUserPoints !== nextState.loggedInUserPoints) {
//     return false;
//   }
//   return true;
// }

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
    .then(response => response.json())
    .then(result => {
      if(result.error){
        alert(result.error)
      }
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

  addActionToUser = (actionID) => {
    fetch(userActionsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.loggedInUser.id,
        action_id: actionID
      })
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

    this.setState({ 
      loggedIn: false,
      avatars: [],
      users: [],
      actions: [],
      loggedInUser: null,
      loggedInAvatar: null,
      mainAvatar: null,
      loggedInUserPoints: 0})

    this.componentDidMount()
  }

  getMainAvatar = () => {
    this.setState({mainAvatar: this.state.avatars.find(avatar => avatar.name === "pink hair")})
  }

  logIn = () => {
    this.setState({loggedIn: true})
  }

  deleteUser = (userId) => {
    this.logOut()

    fetch(`${userURL}/${userId}`, {
      method: 'DELETE'
    })
  }

  render(){

    return (
       
        <div className="main">
          <Switch>
            <Route 
              path="/sign_up" 
              render={() => <SignUpForm 
                                avatars={this.state.avatars} 
                                addUser={this.addUser} 
                                users={this.state.users}
                            />
                      } 
            />
            <Route path='/login'>
              {this.state.loggedIn === true
                ? <Redirect to="/home" />
                : <LogInForm logInUser={this.logInUser} loggedIn={this.state.loggedIn}/>
              }
            </Route>
              
            <AuthenticatedRoute
              path='/home'
              component={() => <LoggedInHomePage 
                                avatar={this.state.loggedInAvatar}
                                logOut={this.logOut} 
                                actions={this.state.actions}
                                addActionToUser={this.addActionToUser}
                                loggedIn={this.state.loggedIn}
                                loggedInUser={this.state.loggedInUser}
                                deleteUser={this.deleteUser}
                                />}
            />
            <Route exact path="/">
            {this.state.loggedIn === true
              ? <Redirect to="/home"/> 
              : <StartPage 
                  avatar={this.state.mainAvatar} 
                  loggedIn={this.state.loggedIn}/>}
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
