import React from 'react'
import AvatarCard from './AvatarCard'

const AvatarContainer = ({avatars, setAvatar}) => {
    const showAvatars = () => {
        return avatars.map(avatar => {
           return <AvatarCard avatar={avatar} key={avatar.id} setAvatar={setAvatar} />
        })
    }

    return(
        <div className="avatar-container">
            {showAvatars()}
        </div>
    )
}
export default AvatarContainer