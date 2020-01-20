import React from 'react'

const CompletedAction = ({action}) => {
    
    const getDate = () => {
        const dateArray = action.dateCompleted.split('T')
        return dateArray[0]
    }
    
    return(
        <div className="completed-action">
            <h3>{action.title}</h3>
            <p>Date Completed: {getDate()}</p>
        </div>
    )
}
export default CompletedAction