import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';


class StartPage extends Component{
    
    state = {
        signUp: false,
        logIn: false
    }
    redirectToSignUp = () => {
        this.setState({signUp: true})
    }

    redirectToLogIn = () => {
        this.setState({logIn: true})
    }

    render(){

        if(this.state.signUp){
            return <Redirect to='/sign_up' />
        }

        if(this.state.logIn){
            return <Redirect to='/login' />
        }

        return(
                <div className="start-page">
                    <h1>App Name</h1>
                    <div className="buttons">
                        <button onClick={this.redirectToLogIn}>Log In</button>
                        <button onClick={this.redirectToSignUp}>
                            Sign Up
                        </button>
                    </div>
                    
                </div>
        )
    }
}
export default StartPage