import React from 'react'

const MessageList = () => {
    const messages = [
        { id:1, userName : "Whatever", body : "Chatting up a storm yo" },
        { id:2, userName : "heyo", body : "This guys is so annoyin. I hate my job" },
    ]

    return(
        <div className="MessageList">
            { messages.map(messages => (
                <div key= {messages.id}>
                    { messages.userName}: {messages.body}
                </div>
            )) }
        </div>
    )
}

export default MessageList