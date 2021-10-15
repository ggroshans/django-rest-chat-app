import React from 'react'
import "./Message.css"
import { FaRegEdit  } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
export default function Message(props) {

let data = {'id':props.id, 'room':props.room}

function handleCloseClick(e) {
    console.log(e.currentTarget.value)
    props.deleteMessage(e.currentTarget.value)
}

    return (
        <div className="message-bubble">
            <div className="message-icon-container">
                <button><FaRegEdit/></button>
                <button value={props.id} onClick={(e) => handleCloseClick(e)}><AiOutlineClose/></button>
            </div>
            <span>{props.author}:</span>
            <span>{props.body}:</span>
        </div>
    )
}
