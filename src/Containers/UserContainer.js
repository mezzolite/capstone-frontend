import React, { Component } from 'react'
import CompletedAction from '../Components/CompletedAction'
import ProgressBar from '../Components/ProgressBar'


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

    
    componentDidMount(){
        if(this.props.userPoints <= 100){
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
                    ? <><h2>Account Name: {this.props.user.username}</h2>
                        <h3>Total XP: {this.props.userPoints}</h3>
                        <h3>Current Level: {this.state.userLevel} </h3>
                        <div className="progress-bar-container">
                            Progress to Next Level
                            <ProgressBar percentage={this.state.percentage} />
                        </div>
                        <button onClick={this.handleClick}>
                            {!this.state.showActions 
                            ? 'Show Completed Actions'
                            : 'Hide Completed Actions'
                            }
                        </button>
                        {this.state.showActions === true
                            ? (this.showCompletedActions())
                            : null
                        }

                    </>
                    : null
    
                }
                
            </div>
        )
    }
}
export default UserContainer