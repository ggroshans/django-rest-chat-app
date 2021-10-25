import "./Header.css";
import React from 'react';
import logo from "./../../images/logo.png";
import Cookies from 'js-cookie';
export default function Header(props) {

function handleClick() {
        if (props.userStatus !== 'approved') {
            props.changeStatus('splash');
        } 
    }

async function handleLogout() {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify({}),
    };
    const response = await fetch('/rest-auth/logout/', options)
    if(!response){
        console.log(response);
    } else {
        console.log(response)
        const data = await response.json();
        Cookies.remove('Authorization');
        props.changeStatus("splash")
       
    }
}

let html;
if (props.userStatus == "approved") {
    html = <button className="header-logout-btn" onClick={handleLogout}>Logout</button>
}

    return (
        <div className="header-container">
            <img className="header-img mt-2" onClick={handleClick} src={logo} />
            {html}
        </div>
    )
}
