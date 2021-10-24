import "./Header.css"
import React from 'react'
import logo from "./../../images/logo.png"
export default function Header(props) {

function handleClick() {
        if (props.userStatus !== 'approved') {
            props.changeStatus('splash');
        } 
    }

let html;
if (props.userStatus == "approved") {
    html = <button className="header-logout-btn">Logout</button>
}

    return (
        <div className="header-container">
            <img className="header-img mt-2" onClick={handleClick} src={logo} />
            {html}
        </div>
    )
}
