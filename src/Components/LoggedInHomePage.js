import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'

const LoggedInHomePage = ({avatar, logOut, actions, addActionToUser, loggedIn}) => {

   

    return(
        <div className="home-page">
            <Header avatar={avatar} loggedIn={loggedIn} logOut={logOut} />
            <UserContainer />
            <ActionContainer actions={actions} addActionToUser={addActionToUser}/>
        </div>
    )
}
export default withRouter(LoggedInHomePage)