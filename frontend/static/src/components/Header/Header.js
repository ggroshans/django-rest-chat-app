import "./Header.css"
import React from 'react'
import logo from "./../../images/logo.png"
export default function Header(props) {

function handleClick() {
        props.changeStatus('splash');
    }

    return (
        <div className="header">
            <img className="header-img mt-4" onClick={handleClick} src={logo} />
        </div>
    )
}
