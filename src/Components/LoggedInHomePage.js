import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'

class LoggedInHomePage extends React.Component {

    state = {
        showAccount: true
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.actions !== nextProps.actions) {
          return true;
        }
        return false;
      }

    toggleAccount = () => {
        console.log('is this working')
        this.setState({
            showAccount: true
        })
    }

   render(){

       return(
           <div className="home-page">
               <Header 
                    avatar={this.props.avatar} 
                    loggedIn={this.props.loggedIn} 
                    logOut={this.props.logOut} 
                    toggleAccount={this.toggleAccount}
                    />
               <h3>In the game of democracy, you participate, or you lose.</h3>
                {this.state.showAccount === true
                    ? <UserContainer user={this.props.loggedInUser} userPoints={this.props.userPoints} />
                    : null
                }
               <ActionContainer 
                    actions={this.props.actions} 
                    addActionToUser={this.props.addActionToUser} 
                    addRewardToPoints={this.props.addRewardToPoints} />
           </div>
       )
   }

}
export default withRouter(LoggedInHomePage)