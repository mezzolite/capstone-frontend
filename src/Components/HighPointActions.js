import React from 'react'
import ActionCard from './ActionCard'
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import { green } from '@material-ui/core/colors';

const HighPointActions = ({actions, toggleVisible, addActionToUser}) => {
    
     const getHPActions = () => {
        return actions.filter(action => action.reward > 45).map(action => {
            return <ActionCard action={action} key={action.id} addActionToUser={addActionToUser} />
            })
        }

    const closeLPActions = () => {
        toggleVisible()
    }

    return(
        <div className="high-point-actions-container">
            {getHPActions()}
            <button aria-label="close" onClick={closeLPActions}>
                    {<HighlightOffTwoToneIcon style={{ color: green[500] }}  />}
            </button>
        </div>
    )
}
export default HighPointActions