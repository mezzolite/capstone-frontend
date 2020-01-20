import React from 'react'
import SimpleMenu from './SimpleMenu'
import AvatarCard from './AvatarCard'

const Header = ({avatar, loggedIn, logOut, toggleAccount}) => {
    return(
        <div className="header">
            <h1>Imp-Politic</h1>
            <div className="avatar">
                {avatar 
                ? <AvatarCard avatar={avatar}/>
                : null
                }
            </div>
            {loggedIn
                ? <SimpleMenu logOut={logOut} toggleAccount={toggleAccount} />
                : null
            }
            
        </div>
    )
}
export default Header