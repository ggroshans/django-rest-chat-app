import React from 'react'
import Message from "./Message/Message"
import { v4 as uuidv4 } from 'uuid';

export default function MessageList(props) {
    return (
        <div>
            {props.messages.map(message => {
                return <Message key={uuidv4()} {...message}/>
            })}
            <form>
            <label htmlFor="chat-message"></label>
                <input type="textarea" id="chat-message" placeholder="Enter Message"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
