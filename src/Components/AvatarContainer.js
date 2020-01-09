import React from 'react'
import AvatarCard from './AvatarCard'

const AvatarContainer = ({avatars}) => {
    const showAvatars = () => {
        return avatars.map(avatar => {
           return <AvatarCard avatar={avatar} key={avatar.id} />
        })
    }

    return(
        <div className="avatar-container">
            {showAvatars()}
        </div>
    )
}
export default AvatarContainer