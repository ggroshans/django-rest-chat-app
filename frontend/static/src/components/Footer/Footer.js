import "./Footer.css"
import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-copyright"> Copyright <AiOutlineCopyrightCircle /> 2021 Diskord. All Rights Reserved</p>
        </div>
    )
}
