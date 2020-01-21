import React, { Component } from 'react'
import LowPointActions from '../Components/LowPointActions'
import HighPointActions from '../Components/HighPointActions'

class ActionContainer extends Component {

    state = {
        visibleLPA: false,
        visibleHPA: false
    }

    

    toggleLPAState = () =>{
        if(this.state.visibleLPA){
            this.setState({visibleLPA: false})
        } else {
            this.setState({visibleLPA: true})
        }
    }

    toggleHPAState = () =>{
        if(this.state.visibleHPA){
            this.setState({visibleHPA: false})
        } else {
            this.setState({visibleHPA: true})
        }
    }


    render(){
        return(
            <div className="action-container">
                {this.state.visibleLPA
                    ? <LowPointActions 
                        actions={this.props.actions} 
                        toggleVisible={this.toggleLPAState} 
                        addActionToUser={this.props.addActionToUser}
                        addRewardToPoints={this.props.addRewardToPoints}
                        getUserInfo={this.props.getUserInfo}
                        />
                    : <button onClick={this.toggleLPAState}>Simple Actions</button>
                }
                {this.state.visibleHPA
                    ? <HighPointActions 
                        actions={this.props.actions} 
                        toggleVisible={this.toggleHPAState} 
                        addActionToUser={this.props.addActionToUser} 
                        addRewardToPoints={this.props.addRewardToPoints}
                        getUserInfo={this.props.getUserInfo}
                        />
                    : <button onClick={this.toggleHPAState}>High Point Actions</button>
                }
            </div>
        )
    }
}
export default ActionContainer