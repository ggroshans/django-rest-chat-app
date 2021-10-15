import React from 'react'
import "./Message.css"
import { FiSend  } from 'react-icons/fi'
import { FaRegEdit  } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
export default function Message(props) {

const [updatedText, setUpdatedText] = useState("")
const [editMessageFlag, setEditMessageFlag] = useState(false)

function handleCloseClick(e) {
    console.log(e.currentTarget.value)
    props.deleteMessage(e.currentTarget.value)
}

function handleEditClick(e){
    // props.updateMessage(e.currentTarget.value)
    setEditMessageFlag(true)
}
function handleSubmitEdit(e) {
    setEditMessageFlag(false)
    let updatedObj = {...props}
    updatedObj.body = updatedText
    console.log("AYYY", updatedObj)
    props.updateMessage(e.currentTarget.value, updatedObj)
}

function handleChange(e) {
    setUpdatedText(e.currentTarget.value)
    console.log(e.currentTarget.value)
}

let html_social_btn, html_message;

if (editMessageFlag) {
    html_social_btn = <button value={props.id} onClick={(e) => handleSubmitEdit(e)}><FiSend/></button>
    html_message = <input onChange={(e) => handleChange(e)} value={updatedText} type='textarea'/>
} else {
    html_social_btn = <div><button onClick={(e) => handleEditClick(e)}><FaRegEdit/></button><button value={props.id} onClick={(e) => handleCloseClick(e)}><AiOutlineClose/></button></div>
    html_message =  <div><span>{props.author}:</span>
    <span>{props.body}:</span></div>
}

    return (
        <div className="message-bubble">
            <div className="message-icon-container">
                {html_social_btn}
                
            </div>
            {html_message}
        </div>
    )
}
