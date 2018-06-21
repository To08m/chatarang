import React, { Component } from 'react'
import { Emoji } from 'emoji-mart'

class Reacti extends Component {
    state = {
        num:0,
    }

    increaseTimes = () => {
        this.state.num+=1
      }

    render(){
        return(
            <button 
                className= "reactions"
                onclick={this.increaseTimes()}
            >
                <Emoji emoji={this.props.react.id} size={16} />
                {this.state.num}
            </button>
        )
    }
}

export default Reacti