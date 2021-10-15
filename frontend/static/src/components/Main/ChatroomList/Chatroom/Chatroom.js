import React from 'react'
import { AiOutlineCloseSquare } from "react-icons/ai"

export default function ChatRoom(props) {

    function handleClick(e) {
        props.deleteChatRoom(e.currentTarget.value)
    }

    return (
        <div>
            <button value={props.id} onClick={(e) => props.changeChatRoom(e.target.value)}>{props.name}</button><button value={props.id} onClick={(e) => handleClick(e)}><AiOutlineCloseSquare/></button>
        </div>
    )
}
