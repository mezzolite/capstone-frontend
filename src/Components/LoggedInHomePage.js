import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'
import HowToCard from './HowToCard'

class LoggedInHomePage extends React.Component {

    state = {
        showAccount: false, 
        visibleHowTo: true,
        loggedInUserPoints: 0,
        percentage: 0, 
        userLevel: 1
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
        // this.getUserInfo()
    }

    getUserInfo = () => {
        if(this.state.loggedInUserPoints && this.state.loggedInUserPoints <= 100){
            this.setState({
                percentage: this.state.loggedInUserPoints 
            })
        } else {
            const percentage = this.state.loggedInUserPoints.toString().split('').slice(-2).join('')
            const userLevel = Math.ceil(this.state.loggedInUserPoints/100)
            this.setState({percentage, userLevel})
        }
    }

    toggleVisibleHowTo = () => {
        if(this.state.visibleHowTo){
            this.setState({
                visibleHowTo: false
            })
        } else {
            this.setState({
                visibleHowTo: true
            })
        }
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
               {this.state.visibleHowTo === true
                ?    <div className="game-how-to">
                        <HowToCard 
                                user={this.props.loggedInUser}
                                toggleVisibleHowTo={this.toggleVisibleHowTo}
                        />
                    </div>
                : null

               }
               <div className="user-action-container">
                    {this.state.showAccount === true
                        ? <UserContainer 
                            user={this.props.loggedInUser} 
                            userPoints={this.state.loggedInUserPoints} 
                            toggleAccount={this.toggleAccount}
                            getUserInfo={this.getUserInfo}
                            percentage={this.state.percentage}
                            userLevel={this.state.userLevel}
                            deleteUser={this.props.deleteUser}
                            />
                        : null
                    }
                    <ActionContainer 
                        actions={this.props.actions} 
                        addActionToUser={this.props.addActionToUser} 
                        addRewardToPoints={this.addRewardToPoints} 
                        userPoints={this.props.userPoints}
                        getUserInfo={this.getUserInfo}
                        
                        />
               </div>
           </div>
       )
   }

}
export default withRouter(LoggedInHomePage)