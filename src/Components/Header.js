import React from 'react'
import SimpleMenu from './SimpleMenu'
import AvatarCard from './AvatarCard'

const Header = ({avatar}) => {
    return(
        <div className="header">
            <div className="avatar">
                {avatar 
                ? <AvatarCard avatar={avatar}/>
                : null
                }
            </div>
            <h1>Imp-Politic</h1>
            {/* <SimpleMenu /> */}
        </div>
    )
}
export default Header