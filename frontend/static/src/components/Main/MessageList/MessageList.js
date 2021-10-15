import React from 'react'
import Message from "./Message/Message"
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export default function MessageList(props) {

const [text, setText] = useState("");

function handleChange(e) {
    setText(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    props.postMessage(text)
    setText("")
}

    return (
        <div>
            {props.messages.map(message => {
                return <Message key={uuidv4()} {...message} deleteMessage={props.deleteMessage} updateMessage={props.updateMessage}/>
            })}
            <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="chat-message"></label>
                <input type="textarea" id="chat-message" placeholder="Enter Message"
                onChange={(e) => handleChange(e)} value={text}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
