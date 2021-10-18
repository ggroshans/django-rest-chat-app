import "./Main.css";
import React from "react";
import Cookies from "js-cookie";
import ChatRoomList from "./ChatRoomList/ChatRoomList";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect, useRef } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState(0);
    const firstRender = useRef(true);

    useEffect(() => {
        grabChatRooms();
        console.log(messages);
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
        grabMessages();
    }

    async function deleteChatRoom(id) {
        await fetch(`/api/chatrooms/${id}/`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
        });
        grabChatRooms();
    }

    async function grabMessages() {
        await fetch(`/api/chatrooms/${currentChatRoom}/messages/`)
            .then((response) => response.json())
            .then((data) => setMessages(data));
    }

    async function postChatRoom(name) {
        let data = {
            name: name,
        };
        const response = await fetch(`/api/chatrooms/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(data),
        });
        grabChatRooms();
        return response.json();
    }

    async function postMessage(message) {
        let data = {
            room: currentChatRoom,
            author: "Username",
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
                body: JSON.stringify(data),
            }
        );
        grabMessages();
        return response.json();
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
        grabMessages();
        return response.json();
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
            />
        </div>
    );
}
