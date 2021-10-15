import React from 'react'
import ChatRoom from './ChatRoom/ChatRoom'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'

export default function ChatRoomList(props) {
    const [addChatFlag, setAddChatFlag] = useState(false)

    function handleClick(e) {
        setAddChatFlag(true)
    }

    let html = "";

    useEffect( () => {
        console.log('firing')
        if (addChatFlag) {
            console.log('here')
            html = '<input type="text">INPUT</input>'
        } 
        else {
            console.log('there')
            html = <button onClick={(e)=> handleClick(e)}> + Add Chat Room </button>
            console.log("there", html)
        }
    }, [addChatFlag])


    return (
        <div>
            Chat Rooms:
            {console.log("HTML",html)}
            {props.chatRooms.map(chatRoom => {
                console.log('chatRoom', chatRoom)
                return <ChatRoom {...chatRoom} key={uuidv4()} changeChatRoom={props.changeChatRoom} />
            })}
        </div>
    )
}
