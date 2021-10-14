import React from "react";
import ChatRoomList from "./ChatRoomList/ChatroomList";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        grabChatRooms()
    }, chatRooms)


    async function grabChatRooms() {
        await fetch("/api/chatrooms/")
            .then((response) => response.json())
            .then((data) => setChatRooms(data));
    }



    return (
        <div>
            <ChatRoomList chatRooms={chatRooms}/>
            <MessageList />
        </div>
    );
}
