import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'

const LoggedInHomePage = ({avatar, logOut, actions, addActionToUser, loggedIn, addRewardToPoints}) => {

   

    return(
        <div className="home-page">
            <Header avatar={avatar} loggedIn={loggedIn} logOut={logOut} />
            <h3>In the game of democracy, you participate, or you lose.</h3>

            <UserContainer />
            <ActionContainer actions={actions} addActionToUser={addActionToUser} addRewardToPoints={addRewardToPoints} />
        </div>
    )
}
export default withRouter(LoggedInHomePage)