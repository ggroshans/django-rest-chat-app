import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Registration(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    function handleChange(e) {
        const modifiedData = {
            ...formData,
        };
        modifiedData[e.target.id] = e.target.value;
        setFormData(modifiedData);
        console.log(formData.username);
    }
    let passwordWarning;
    if (formData.password1 !== formData.password2){
        passwordWarning = <p className='text-danger'>Passwords do not match</p>
    } else {
        passwordWarning = ""
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (formData.password1 === formData.password2){
            props.handleRegistration(formData); 
        }


    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Username"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Email"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="text"
                        id="password1"
                        value={formData.password1}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        id="password2"
                        value={formData.password2}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                    />
                    {passwordWarning}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
