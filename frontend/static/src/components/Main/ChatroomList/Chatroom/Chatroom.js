import React from 'react'
import "./Chatroom.css"
import { AiOutlineClose } from "react-icons/ai"

export default function ChatRoom(props) {

    function handleClick(e) {
        props.deleteChatRoom(e.currentTarget.value)
    }

    return (
        <div className="chatroom-container">
            <button className="btn btn-outline-success chatroom-btn" value={props.id} onClick={(e) => props.changeChatRoom(e.target.value)}>#{props.name}            <button className="chatroom-close-btn" value={props.id} onClick={(e) => handleClick(e)}><AiOutlineClose/></button></button>

        </div>
    )
}
