import React from 'react'
import ChatRoom from './ChatRoom/ChatRoom'

export default function ChatRoomList(props) {
    return (
        <div>
            Chat Rooms:
            {props.chatRooms.map(chatRoom => {
                console.log('chatRoom', chatRoom)
                return <ChatRoom {...chatRoom} />
            })}

        </div>
    )
}
