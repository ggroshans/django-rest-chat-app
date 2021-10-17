import React from "react";
import { useState } from 'react';

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        console.log("FORMDATA", formData);
    }

    function handleSubmit(e) {
        console.log(formData);
        e.preventDefault();
        props.handleLogin(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left mb-3 mt-5">
                    <label className="text-left" htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Username"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-5">
                    <label htmlFor="Password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                    />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </div>
    );
}
