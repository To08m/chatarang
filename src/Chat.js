import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor(){
        super()

        this.state = {
            messages: [
                { id:1, userName : "Whatever", body : "Chatting up a storm yo" },
                { id:2, userName : "heyo", body : "This guys is so annoyin. I hate my job" },
            ],
        }
    }

    render(){
        return(
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat