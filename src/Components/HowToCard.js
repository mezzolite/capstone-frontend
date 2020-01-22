import React from 'react'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';


const HowToCard = ({user, toggleVisibleHowTo}) => {

    const closeHowTo = () => {
        toggleVisibleHowTo()
    }

    return(
        <div className="how-to-card">
            {user
                ? <>
                    <h2>Welcome to Imp-Politic, {user.username}</h2>
                    <p>To win in the game of democracy, you must complete certain tasks. </p> 
                    <p>Click on the buttons below to choose an action. </p>
                    <p>Click on an action to get more information.</p>
                    <p>Each action will reward you with XP and help you level up your advocacy skill.</p>
                    <button className="close-how-to-button" onClick={closeHowTo}>
                            {<HighlightOffTwoToneIcon style={{ color: green[100] }}  />}
                    </button>
                </>
                : null
            
            }
        </div>
    )
}
export default HowToCard