import React from 'react'
import SimpleMenu from './SimpleMenu'
import AvatarCard from './AvatarCard'

const Header = ({avatar}) => {
    return(
        <div className="header">
            <h1>Imp-Politic</h1>
            <div className="avatar">
                {avatar 
                ? <AvatarCard avatar={avatar}/>
                : null
                }
            </div>
            <SimpleMenu />
        </div>
    )
}
export default Header