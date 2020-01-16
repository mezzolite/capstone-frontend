import React from 'react'

const UserContainer = ({logOut}) => {

    const handleClick = () => {
        logOut()
    }
    
    return(
        <div className="user-container">
            <button className="log-out-button" onClick={handleClick}>Log Out</button>
        </div>
    )
}
export default UserContainer