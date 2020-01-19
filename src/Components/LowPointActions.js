import React from 'react'
import ActionCard from './ActionCard'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';


const LowPointActions = ({actions, toggleVisible, addActionToUser, addRewardToPoints}) => {
    
     const getLPActions = () => {
        return actions.filter(action => action.reward < 45).map(action => {
            return <ActionCard 
                        action={action} 
                        key={action.id} 
                        addActionToUser={addActionToUser}
                        addRewardToPoints={addRewardToPoints}
                        />
            })
        }
    
    const closeLPActions = () => {
        toggleVisible()
    }

    return(

        <div className="partial-action-container">
            {getLPActions()}
            <button aria-label="close" onClick={closeLPActions}>
                    {<HighlightOffTwoToneIcon style={{ color: green[900] }} />}
            </button>
        </div>
    )
}
export default LowPointActions