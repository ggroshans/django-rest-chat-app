import "./ChatRoomList.css";
import React from "react";
import ChatRoom from "./ChatRoom/ChatRoom";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md"

export default function ChatRoomList(props) {
    const [addChatFlag, setAddChatFlag] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    function handleAddChat(e) {
        setAddChatFlag(true);
    }
    function handleAddChatName() {
        props.postChatRoom(newChatName);
        setNewChatName("");
        setAddChatFlag(false);
    }

    function handleChange(e) {
        setNewChatName(e.target.value);
    }

    let html;

    if (addChatFlag) {
        html = (
            <div className='create-chatroom-container'>
                <input
                    onChange={(e) => handleChange(e)}
                    value={newChatName}
                    type="text"
                />
                <button onClick={(e) => handleAddChatName()} className="btn btn-success-outline create-chat-btn">Create</button>
            </div>
        );
    } else {
        html = (
            <button onClick={(e) => handleAddChat(e)} className="btn btn-success-outline add-chatroom-btn"> <MdAddCircle/> Add Channel </button>
        );
    }

    return (
        <div className="chatroom-list-container">
            <div className="chatroom-list-header">
                <h2>Channels:</h2>
                {html}
            </div>
            <div className="chatroom-list">
            {props.chatRooms.map((chatRoom) => {
                return (
                    <ChatRoom
                        {...chatRoom}
                        key={uuidv4()}
                        changeChatRoom={props.changeChatRoom}
                        deleteChatRoom={props.deleteChatRoom}
                    />
                );
            })}
            </div>

        </div>
    );
}
