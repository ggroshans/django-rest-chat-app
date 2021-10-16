
import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Registration(props) {

const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
})

function handleChange(e) {
    const modifiedData = {
        ...formData
    }
    modifiedData[e.target.id] = e.target.value
    setFormData(modifiedData)
    console.log(formData.username)
}

function handleSubmit(e) {
    props.handleRegistration()
}

    return (
        <div>
            <form>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={formData.username} onChange={(e) => handleChange(e)} placeholder="Enter Username"/>
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={formData.email} onChange={(e) => handleChange(e)} placeholder="Enter Email"/>
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="Password">Password:</label>
                    <input type="text" id="password" value={formData.password} onChange={(e) => handleChange(e)} placeholder="Enter Password"/>
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="password">Password:</label>
                    <input type="text" id="password" value={formData.password} onChange={(e) => handleChange(e)} placeholder="Enter Password"/>
                </div>
                <button onSubmit={(e) => handleSubmit(e)}>Register</button>
            </form>
        </div>
    )
}
