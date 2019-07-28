import React from 'react'
import './Button.css'

function button(props) {
    return (
        <div>
            <button className={`button button-${props.type}`}>{props.text}</button>
        </div>
    )
}

export default button