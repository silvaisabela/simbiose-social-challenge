import React from 'react'
import './Button.css'


function button(props) {
    return (
        <div>
            <button className={`button button-${props.type}`}>
                {
                    props.image != undefined
                        ? <img className="button__image" src={require(`./${props.image}.png`)} />
                        : ""
                }
                {props.text != undefined ? <div>{props.text}</div> : ""}
            </button>
        </div>
    )
}

export default button