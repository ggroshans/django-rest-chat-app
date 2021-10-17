import React from "react";
import "./Login.css";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

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

    function handleBackBtn() {

    }

    return (
        <div className="login-container">
            <button className="login-back-btn" onClick={handleBackBtn}>
                <BiArrowBack />
            </button>
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left mb-3">
                    <label className="form-label" htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Username"
                        className="form-control"
                    />
                </div>
                <div className="form-group text-left mb-3 mt-2">
                    <label className="form-label" htmlFor="Password">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Password"
                        className="form-control"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success submit-login-btn"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
