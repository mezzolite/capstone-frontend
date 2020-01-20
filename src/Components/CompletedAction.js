import React from 'react'

const CompletedAction = ({action}) => {
    
    const getDate = () => {
        const dateArray = action.dateCompleted.split('T')
        return dateArray[0]
    }
    
    return(
        <li className="completed-action">
            <label>Date Completed: {getDate()}</label>
            <p>{action.title}</p>
            
        </li>
    )
}
export default CompletedAction