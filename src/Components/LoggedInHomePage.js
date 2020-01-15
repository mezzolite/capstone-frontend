import React from 'react'
import Header from './Header'
import {withRouter} from 'react-router-dom'
import UserContainer from '../Containers/UserContainer'

const LoggedInHomePage = ({avatar, logOut}) => {

    const handleClick = () => {
        logOut()
    }

    return(
        <div className="logged-in-home-page">
            <Header avatar={avatar}/>
            <button className="log-out-button" onClick={handleClick}>Log Out</button>
        </div>
    )
}
export default withRouter(LoggedInHomePage)