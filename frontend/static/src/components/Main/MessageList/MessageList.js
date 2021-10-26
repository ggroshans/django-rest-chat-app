import "./MessageList.css";
import React from "react";
import Message from "./Message/Message";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

export default function MessageList(props) {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.postMessage(text);
        setText("");
    }

    let html

    console.log("CURR CR", props.currentChatRoom)

    useEffect( () => {
        if (props.currentChatRoom === null) {
            console.log("Fired")
            html = <h2 className="not-in-chatroom-heading">You are currently not in a chatroom</h2>
        } 
    }, [props.currentChatRoom])


    return (
        <div className="message-list-container">
            {html}
            {props.messages.map((message) => {
                return (
                    <Message
                        key={uuidv4()}
                        {...message}
                        deleteMessage={props.deleteMessage}
                        updateMessage={props.updateMessage}
                    />
                );
            })}
            <div className="new-message-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="chat-message"></label>
                    <input
                        type="textarea"
                        id="chat-message"
                        placeholder="Enter Message..."
                        onChange={(e) => handleChange(e)}
                        value={text}
                        className='form-control enter-message-input'
                    />
                    <button type="submit" className="btn btn-outline-success submit-message-btn">Send</button>
                </form>
            </div>
        </div>
    );
}
