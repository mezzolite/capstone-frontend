import React, { Component } from 'react'
import AvatarContainer from './AvatarContainer'

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
          
        event.target.reset()
    }

    setAvatar = (avatar) => {
        this.setState({avatar_id: avatar})
    }

    render(){
        return(
            <form className="sign-up-form">
                <label for="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    id="username" 
                    value={this.state.username}
                    onChange={this.setValue}
                />
                <label for="password">Password</label>
                <input 
                    type="text" 
                    name="password" 
                    id="password"
                    value={this.state.password}
                    onChange={this.setValue}
                />
                <label for="zipcode">Zipcode</label>
                <input 
                    type="number" 
                    name="zipcode" 
                    id="zipcode"
                    value={this.state.zipcode}
                    onChange={this.setValue}
                />
                <div className="avatar-selection">
                    Pick an Avatar:
                    <AvatarContainer avatars={this.props.avatars} setAvatar={this.setAvatar}/>
                </div>
                <input type="submit" name="submit" value="Sign Up" />
            </form>
        )
    }
}
export default SignUpForm