import React from 'react'
import ChatRoomList from './ChatRoomList/ChatroomList'
import MessageList from './MessageList/MessageList'
import { useState } from 'react'

export default function Main() {

const [chatRooms, setChatRooms] = useState([])
const [messages, setMessages] = useState([])


    return (
        <div>
            <ChatRoomList />
            <MessageList />
        </div>
    )
}
