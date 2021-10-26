import "./Main.css";
import React from "react";
import Cookies from "js-cookie";
import ChatRoomList from "./ChatRoomList/ChatRoomList";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect, useRef } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState(null);
    const firstRender = useRef(true);

    useEffect(() => {
        grabChatRooms();
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            grabMessages(currentChatRoom);
        }
    }, [currentChatRoom]);


    async function grabChatRooms() {
            await fetch(`/api/chatrooms/`)
            .then((response) => response.json())
            .then((data) => setChatRooms(data));
    }

    async function deleteMessage(id) {
        await fetch(`/api/chatrooms/${currentChatRoom}/messages/${id}/`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        });
        
        let updatedMessages = [...messages];
        let index = updatedMessages.findIndex(message => message.id === id);
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages)
        setCurrentChatRoom(null)
    }

    async function deleteChatRoom(id) {
        await fetch(`/api/chatrooms/${id}/`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        });
        let updatedChatRooms = [...chatRooms];
        let index = updatedChatRooms.findIndex(chatroom => chatroom.id === id);
        updatedChatRooms.splice(index, 1);
        setChatRooms(updatedChatRooms)
        setCurrentChatRoom(null)
    }

    async function grabMessages() {
        if (currentChatRoom === undefined) {
            setCurrentChatRoom(null)
        } else {
        await fetch(`/api/chatrooms/${currentChatRoom}/messages/`)
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }
}

    async function postChatRoom(name) {
        let POSTdata = {
            name: name,
        };
        const response = await fetch(`/api/chatrooms/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(POSTdata),
        });
        const data = await response.json();
        let updatedChatrooms = [...chatRooms]
        updatedChatrooms.push(data)
        setChatRooms(updatedChatrooms);
    }

    async function postMessage(message) {
        let POSTdata = {
            room: currentChatRoom,
            user: "Username",
            body: message,
        };
        const response = await fetch(
            `/api/chatrooms/${currentChatRoom}/messages/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": Cookies.get("csrftoken"),
                },
                body: JSON.stringify(POSTdata),
            }
            
        );
        const data = await response.json()
        let updatedMessages = [...messages]
        updatedMessages.push(data)
        setMessages(updatedMessages)
    }

    async function updateMessage(id, obj) {
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(obj),
        };
        const response = await fetch(
            `/api/chatrooms/${currentChatRoom}/messages/${id}/`,
            requestOptions
        );
        const data = await response.json();
        let messageTarget = messages.findIndex(obj => obj.id === data.id)
        let updatedArr = [...messages]
        updatedArr[messageTarget].message = data.message;
        setMessages(updatedArr);
    }

    function changeChatRoom(id) {
        setCurrentChatRoom(id);
    }

    return (
        <div className="main-container">
            <ChatRoomList
                chatRooms={chatRooms}
                changeChatRoom={changeChatRoom}
                postChatRoom={postChatRoom}
                deleteChatRoom={deleteChatRoom}
            />
            <MessageList
                messages={messages}
                grabMessages={grabMessages}
                postMessage={postMessage}
                deleteMessage={deleteMessage}
                updateMessage={updateMessage}
                currentChatRoom = {currentChatRoom}
            />
        </div>
    );
}
