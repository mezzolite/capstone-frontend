import React, { Component } from 'react'

class ActionCard extends Component {
    
    render(){

        return(
            <div className="action-card">
                <li>{this.props.action.title}</li>
            </div>
        )


    }
}
export default ActionCard