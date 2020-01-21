import React, { Component } from 'react'
import AvatarContainer from './AvatarContainer'
import {withRouter, Link} from 'react-router-dom'

class SignUpForm extends Component{

    state = {
        username: '',
        password: '',
        zipcode: 0,
        avatar_id: 0
    }

    setValue = (event) => {
        const newUser = {}
        newUser[event.target.name] = event.target.value
        this.setState(newUser)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.props.history.push('/login')          
    }

    setAvatar = (avatar) => {
        this.setState({avatar_id: avatar})
    }

    render(){
        return(
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <h1>SIGN UP</h1>
                <ul>
                    <li>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            id="username" 
                            value={this.state.username}
                            onChange={this.setValue}
                            required
                        />
                    </li>
                
                    <li>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={this.state.password}
                            onChange={this.setValue}
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="zipcode">Zipcode</label>
                        <input 
                            type="number" 
                            name="zipcode" 
                            id="zipcode"
                            value={this.state.zipcode}
                            onChange={this.setValue}
                            required
                        />
                    </li>
                    <li className="avatar-selection" id="avatar-selection">
                        <label htmlFor='avatar-selection'>Pick an Avatar</label>
                        <AvatarContainer avatars={this.props.avatars} setAvatar={this.setAvatar}/>
                    </li>
                    <div className="submit-button">
                        <input type="submit" name="submit" value="Sign Up" />
                    </div>
                    <div className="log-in-link">
                        <Link className="log-in-link" to="/login">Already have an account? Log In </Link>
                    </div>
                </ul>
            </form>
        )
    }
}
export default withRouter(SignUpForm);