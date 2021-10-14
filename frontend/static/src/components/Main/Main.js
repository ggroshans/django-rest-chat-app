import React from "react";
import ChatRoomList from "./ChatRoomList/ChatroomList";
import MessageList from "./MessageList/MessageList";
import { useState } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);

    function grabChatRooms() {
        fetch("")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <div>
            <ChatRoomList />
            <MessageList />
        </div>
    );
}
