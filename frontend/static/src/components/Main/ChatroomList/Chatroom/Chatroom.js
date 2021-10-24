import React from 'react'
import "./Chatroom.css"
import { AiOutlineClose } from "react-icons/ai"
import { useState, useEffect } from 'react'

export default function ChatRoom(props) {



    function handleClick(e) {
        props.deleteChatRoom(e.currentTarget.value)
    }

    function handleClickChat(e) {
        props.changeChatRoom(e.target.value)
        // e.target.classList.add("chatroom-selected")
        console.log(e)
    }

    return (
        <div className="chatroom-container">
            <button className="btn btn-outline-success chatroom-btn" value={props.id} onClick={(e) => handleClickChat(e)}>#{props.name} <button className="chatroom-close-btn" value={props.id} onClick={(e) => handleClick(e)}><AiOutlineClose/></button></button>
        </div>
    )
}
