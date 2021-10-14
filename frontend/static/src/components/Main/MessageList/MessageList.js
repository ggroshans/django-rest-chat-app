import React from 'react'
import Message from "./Message/Message"

export default function MessageList(props) {
    return (
        <div>
            {props.messages.map(message => {
                return <Message {...message}/>
            })}

        </div>
    )
}
