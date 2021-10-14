import React from 'react'

export default function Message(props) {
    return (
        <div>
            <span>{props.author}:</span>
            <span>{props.body}:</span>
        </div>
    )
}
