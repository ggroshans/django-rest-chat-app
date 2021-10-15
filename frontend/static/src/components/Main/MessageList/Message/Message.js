import React from 'react'
import "./Message.css"

export default function Message(props) {
    return (
        <div className="message-bubble">
            <span>{props.author}:</span>
            <span>{props.body}:</span>
        </div>
    )
}
