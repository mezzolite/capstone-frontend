import React from 'react'
import ActionCard from './ActionCard'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';

const HighPointActions = ({actions, toggleVisible, addActionToUser, addRewardToPoints, getUserInfo}) => {
    
     const getHPActions = () => {
        return actions.filter(action => action.reward > 45).map(action => {
            return <ActionCard 
                        action={action} 
                        key={action.id} 
                        addActionToUser={addActionToUser}
                        addRewardToPoints={addRewardToPoints}
                        getUserInfo={getUserInfo}
                        />
            })
        }

    const closeLPActions = () => {
        toggleVisible()
    }

    return(
        <div className="partial-action-container">
            {getHPActions()}
            <button aria-label="close" onClick={closeLPActions}>
                    {<HighlightOffTwoToneIcon style={{ color: green[900] }}  />}
            </button>
        </div>
    )
}
export default HighPointActions