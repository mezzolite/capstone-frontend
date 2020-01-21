import React, { Component } from 'react'
import CompletedAction from '../Components/CompletedAction'
import ProgressBar from '../Components/ProgressBar'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';


class UserContainer extends Component {

    state = {
        showActions: false,
        percentage: 0, 
        userLevel: 1
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
        if(this.props.userPoints && this.props.userPoints <= 100){
            this.setState({
                percentage: this.props.userPoints 
            })
        } else {
            const percentage = this.props.userPoints.toString().split('').slice(-2).join('')
            const userLevel = Math.ceil(this.props.userPoints/100)
            this.setState({percentage, userLevel})
        }
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
                            <p>{this.state.userLevel}</p>
                        </li>
                        <li className="progress-bar-container">
                            <label>Progress to Next Level</label>
                            <ProgressBar percentage={this.state.percentage} />
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
                        

                    </>
                    : null
    
                }
                
            </div>
        )
    }
}
export default UserContainer