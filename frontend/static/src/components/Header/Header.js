import "./Header.css"
import React from 'react'
import logo from "./../../images/logo.png"
export default function Header() {
    return (
        <div className="header">
            <img className="header-img" src={logo} />
        </div>
    )
}
