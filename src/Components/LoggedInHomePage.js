import React from 'react'
import Header from './Header'

const LoggedInHomePage = ({avatar}) => {
    return(
        <div className="logged-in-home-page">
            <Header avatar={avatar}/>
        </div>
    )
}
export default LoggedInHomePage