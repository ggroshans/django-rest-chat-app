import React from 'react'

export default function ChatRoom(props) {
    return (
        <div>
            <button value={props.id} onClick={(e) => props.changeChatRoom(e.target.value)}>{props.name}</button>
        </div>
    )
}
