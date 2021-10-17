import './Splash.css'
import React from "react";

export default function Splash(props) {
    function handleClick(e) {
        props.changeStatus(e.target.value);
    }

    return (
        <div className='splash-container'>
            <h1>Welcome to <span className="diskord-green">Diskord</span> Chat Client</h1>
            <p>Diskord is a place where you can belong to a programming cohort, a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <button className="btn btn-success" value="register" onClick={handleClick}>
                Register
            </button>
            <button className="btn btn-success mt-2" value="login" onClick={handleClick}>
                Login
            </button>
        </div>
    );
}
