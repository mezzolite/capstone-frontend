import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'
import ActionContainer from '../Containers/ActionContainer'

const LoggedInHomePage = ({avatar, logOut}) => {

   

    return(
        <div className="logged-in-home-page">
            <Header avatar={avatar}/>
            <UserContainer logOut={logOut} />
            <ActionContainer />
        </div>
    )
}
export default withRouter(LoggedInHomePage)