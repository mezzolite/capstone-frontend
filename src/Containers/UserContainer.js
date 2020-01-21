import React, { Component } from 'react'
import CompletedAction from '../Components/CompletedAction'
import ProgressBar from '../Components/ProgressBar'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';


class UserContainer extends Component {

    state = {
        showActions: false,
        // percentage: 0, 
        // userLevel: 1
    }

    showCompletedActions = () => {
       return this.props.user.actions.map(action => {
            return <CompletedAction action={action} key={action.id}/>
        })
    } 

    handleClick = () =>{
        if(!this.state.showActions){this.setState({
            showActions: true
        })} else {
            this.setState({
                showActions: false
            })
        }
    }

    closeUserContainer = () => {
        this.props.toggleAccount()
    }

    
    componentDidMount(){
       this.props.getUserInfo()
    }

    handleDeleteUser = () => {
        this.props.deleteUser(this.props.user.id)
    }


    render(){

        return(
            <div className="user-container">
                {this.props.user
                    ? <>
                        <button className="close-user-container-button" onClick={this.closeUserContainer}>
                            {<HighlightOffTwoToneIcon style={{ color: green[400] }}  />}
                        </button>
                        <li>
                            <label>Account Name</label>
                            <p>{this.props.user.username}</p>
                        </li>
                        <li>
                            <label>Total XP</label>
                            <p>{this.props.userPoints}</p>
                        </li>
                        <li>
                            <label>Level</label>
                            <p>{this.props.userLevel}</p>
                        </li>
                        <li className="progress-bar-container">
                            <label>Progress to Next Level</label>
                            <ProgressBar percentage={this.props.percentage} />
                        </li>
                        <button className="completed-actions-button" onClick={this.handleClick}>
                            {!this.state.showActions 
                            ? 'Show Completed Actions'
                            : 'Hide Completed Actions'
                            }
                        </button>
                        <div className="completed-actions-container">
                            {this.state.showActions === true
                                ? (this.showCompletedActions())
                                : null
                            }
                        </div>
                        <button className="delete-user-button" onClick={this.handleDeleteUser}>
                            Delete Account
                        </button>
                        

                    </>
                    : null
    
                }
                
            </div>
        )
    }
}
export default UserContainer