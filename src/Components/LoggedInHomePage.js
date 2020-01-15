import React from 'react'
import Header from './Header'

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
export default LoggedInHomePage