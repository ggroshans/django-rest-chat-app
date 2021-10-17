import React from "react";
import { useState } from "react";
import './Registration.css'

export default function Registration(props) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: "",
    });

    function handleChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
        console.log("FORMDATA", formData);
    }
    let passwordWarning;
    if (formData.password1 !== formData.password2) {
        passwordWarning = <p className="text-danger">Passwords do not match</p>;
    } else {
        passwordWarning = "";
    }

    function handleSubmit(e) {
        console.log(formData);
        e.preventDefault();
        if (
            formData.password1 === formData.password2 &&
            formData.password1 !== ""
        ) {
            props.handleRegistration(formData);
        }
    }

    return (
        <div className="registration-form-container">
            <form className="registration-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group text-left mb-3 mt-5">
                    <label className="form-label" htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Username"
                        className="form-control"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Email"
                        className="form-control"
                    />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label className="form-label" htmlFor="Password">Password:</label>
                    <input
                        type="password"
                        id="password1"
                        value={formData.password1}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                        className="form-control"
                    />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label className="form-label" htmlFor="password">Re-enter Password:</label>
                    <input
                        type="password"
                        id="password2"
                        value={formData.password2}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                        className="form-control"
                    />
                    {passwordWarning}
                </div>
                <button type="submit" className="btn btn-success mt-3">Register</button>
            </form>
        </div>
    );
}
