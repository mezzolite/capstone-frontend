import React from 'react'
import SimpleMenu from './SimpleMenu'
import AvatarCard from './AvatarCard'

const Header = ({avatar}) => {
    return(
        <div className="header">
            <h1>App Name</h1>
            <SimpleMenu />
            {avatar 
            ? <AvatarCard avatar={avatar}/>
            : null
            }
        </div>
    )
}
export default Header