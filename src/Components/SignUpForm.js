import React, { Component } from 'react'
import AvatarContainer from './AvatarContainer'

class SignUpForm extends Component{

    state = {
        username: '',

    }
    render(){
        return(
            <form className="sign-up-form">
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
                <input type="number" placeholder="zipcode"/>
                <div className="avatar-selection">
                    Pick an Avatar:
                    <AvatarContainer avatars={this.props.avatars}/>
                </div>
                

            </form>
        )
    }
}
export default SignUpForm