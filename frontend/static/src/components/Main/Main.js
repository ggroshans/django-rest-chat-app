import "./Main.css"
import React from "react";
import ChatRoomList from "./ChatRoomList/ChatroomList";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        grabChatRooms()
        // grabSpecificChatRoom(4)
        grabMessages(5)
        console.log(messages)
    }, [])


    async function grabChatRooms() {
        await fetch(`/api/chatrooms/`)
            .then((response) => response.json())
            .then((data) => setChatRooms(data));
    }

    // async function grabSpecificChatRoom(id) {
    //     await fetch(`/api/chatrooms/${id}/`)
    //         .then((response) => response.json())
    //         .then((data) => console.log("geochat", data));
    // }

  
    // async function deleteChatRoom(id) {
        
    //     await fetch(`/api/chatrooms/${id}`, {
    //           method: 'DELETE', 
    //         });
    //         return response.json(); 
    //       }

    async function renameChatRoom(id, nameChange) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameChange })
        };
        await fetch(`/api/chatrooms/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    
    async function grabMessages(id) {
        await fetch(`/api/chatrooms/${id}/messages/`)
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }

    return (
        <div className="main-container">
            <ChatRoomList chatRooms={chatRooms}/>
            <MessageList messages={messages} grabMessages={grabMessages}/>
        </div>
    );
}
