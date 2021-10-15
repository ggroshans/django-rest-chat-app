import "./ChatRoomList.css";
import React from "react";
import ChatRoom from "./ChatRoom/ChatRoom";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function ChatRoomList(props) {
    const [addChatFlag, setAddChatFlag] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    function handleAddChat(e) {
        setAddChatFlag(!addChatFlag);
    }
    function handleAddChatName() {
        props.postChatRoom(newChatName);
    }

    function handleChange(e) {
        setNewChatName(e.target.value);
    }

    let html;

    if (addChatFlag) {
        html = (
            <div>
                <input
                    onChange={(e) => handleChange(e)}
                    value={newChatName}
                    type="text"
                />
                <button onClick={(e) => handleAddChatName()}>Add Name</button>
            </div>
        );
    } else {
        html = (
            <button onClick={(e) => handleAddChat(e)}> + Add Chat Room </button>
        );
    }

    return (
        <div className="chatroom-list-container">
            Chat Rooms:
            {html}
            {props.chatRooms.map((chatRoom) => {
                console.log("chatRoom", chatRoom);
                return (
                    <ChatRoom
                        {...chatRoom}
                        key={uuidv4()}
                        changeChatRoom={props.changeChatRoom}
                    />
                );
            })}
        </div>
    );
}
