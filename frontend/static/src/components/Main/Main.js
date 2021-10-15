import "./Main.css"
import React from "react";
import ChatRoomList from "./ChatRoomList/ChatRoomList";
import MessageList from "./MessageList/MessageList";
import { useState, useEffect, useRef } from "react";

export default function Main() {
    const [chatRooms, setChatRooms] = useState([]);
    const [messages, setMessages] = useState([]);
    const [currentChatRoom, setCurrentChatRoom] = useState(0)
    const firstRender = useRef(true)
    
    useEffect(() => {
        grabChatRooms()

        console.log(messages)
    }, [])

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = false;
        }
        else {
            grabMessages(currentChatRoom)
        }


    }, [currentChatRoom])
    


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

    async function postChatRoom(name){
        let data = {
            name: name
        }
        const response = await fetch(`/api/chatrooms/`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          })
          grabChatRooms()
          return response.json()
        }

    async function postMessage(message){
        let data = {
            room: currentChatRoom,
            author: "username here",
            body: message
        }
        const response = await fetch(`/api/chatrooms/${currentChatRoom}/messages/`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
          });
          grabMessages(currentChatRoom)
          return response.json()
        }
    
    

    function changeChatRoom(id) {
        setCurrentChatRoom(id)

  
    }

    return (
        <div className="main-container">
            <ChatRoomList chatRooms={chatRooms} changeChatRoom={changeChatRoom} postChatRoom={postChatRoom}/>
            <MessageList messages={messages} grabMessages={grabMessages} postMessage={postMessage}/>
        </div>
    );
}
