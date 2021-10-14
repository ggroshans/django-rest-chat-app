import React from 'react'
import ChatRoom from './ChatRoom/ChatRoom'
import { v4 as uuidv4 } from 'uuid';

export default function ChatRoomList(props) {
    return (
        <div>
            Chat Rooms:
            {props.chatRooms.map(chatRoom => {
                console.log('chatRoom', chatRoom)
                return <ChatRoom {...chatRoom} key={uuidv4()} />
            })}

        </div>
    )
}
