import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Header from './Header'


class StartPage extends Component{
    
    state = {
        signUp: false,
        logIn: false
    }

    goToSignUp = () => {
        this.props.history.push('/sign_up')
    }

    goToLogIn = () => {
        this.props.history.push('/login')
    }

    render(){

        return(
                <div className="start-page">
                    <div className='header'>
                    {this.props.avatar
                        ? <Header avatar={this.props.avatar} />
                        : null
                    }
                    </div>
                    <div className="buttons">
                        <button onClick={this.goToLogIn}>Log In</button>
                        <button onClick={this.goToSignUp}>
                            Sign Up
                        </button>
                    </div>
                </div>
        )
    }
}
export default withRouter(StartPage)