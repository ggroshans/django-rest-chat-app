import React from 'react'
import "./Message.css"
import { FaRegEdit  } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
export default function Message(props) {
    return (
        <div className="message-bubble">
            <div className="message-icon-container">
                <button><FaRegEdit/></button>
                <button><AiOutlineClose/></button>
            </div>
            <span>{props.author}:</span>
            <span>{props.body}:</span>
        </div>
    )
}
