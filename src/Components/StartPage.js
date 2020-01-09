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

    render(){

        if(this.state.signUp){
            return <Redirect to='/sign_up' />
        }

    
        return(
            <Router>
                <div className="start-page">
                    <h1>App Name</h1>
                    <div className="buttons">
                        <button>Log In</button>
                        <button onClick={this.redirectToSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
                <Switch>
                    <Route 
                        exact path="/sign_up" 
                        render={() => <SignUpForm 
                                        avatars={this.props.avatars} 
                                        addUser={this.props.addUser} 
                                        logIn={this.props.logIn}
                                        />
                                } 
                    />
                </Switch>
            </Router>
        )
    }
}
export default StartPage