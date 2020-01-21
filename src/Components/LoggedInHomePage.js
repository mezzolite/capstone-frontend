import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'

class LoggedInHomePage extends React.Component {

    state = {
        showAccount: false, 
        loggedInUserPoints: 0
    }
    
    

    toggleAccount = () => {
        if(this.state.showAccount){
            this.setState({
                showAccount: false
            })
        } else {
            this.setState({
                showAccount: true
            })
        }
    }


    getLoggedInUserPoints = () => {
        if(this.props.loggedInUser && this.props.loggedInUser.actions.length > 0){
          const allRewards = this.props.loggedInUser.actions.map(action => action.reward)
          this.setState({loggedInUserPoints: allRewards.reduce((total, reward)=> total + reward)})
        }
      }

    addRewardToPoints = (reward) => {
        this.setState({loggedInUserPoints: this.state.loggedInUserPoints + reward})
    }

   render(){
       return(
           <div className="home-page">
               <Header 
                    avatar={this.props.avatar} 
                    loggedIn={this.props.loggedIn} 
                    logOut={this.props.logOut} 
                    toggleAccount={this.toggleAccount}
                    getLoggedInUserPoints={this.getLoggedInUserPoints}
                    />
               <h3>In the game of democracy, you participate, or you lose.</h3>
               <div className="user-action-container">
                    {this.state.showAccount === true
                        ? <UserContainer 
                            user={this.props.loggedInUser} 
                            userPoints={this.state.loggedInUserPoints} 
                            toggleAccount={this.toggleAccount}
                            />
                        : null
                    }
                    <ActionContainer 
                        actions={this.props.actions} 
                        addActionToUser={this.props.addActionToUser} 
                        addRewardToPoints={this.addRewardToPoints} 
                        userPoints={this.props.userPoints}
                        />
               </div>
           </div>
       )
   }

}
export default withRouter(LoggedInHomePage)