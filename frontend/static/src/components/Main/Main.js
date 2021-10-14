import React from "react";
import ChatRoomList from "./ChatRoomList/ChatroomList";
import MessageList from "./MessageList/MessageList";
import { useState } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);

    function grabChatRooms() {
        fetch("https://django-chat-app-ggroshansii.herokuapp.com/api/chatrooms/")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    grabChatRooms()

    return (
        <div>
            <ChatRoomList />
            <MessageList />
        </div>
    );
}
