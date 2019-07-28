import React from 'react'
import './Label.css'

function label(props) {    
        return(
            <div className={`label label-${props.color}`}>
                <p style={{fontSize: `${props.fontSize}px`}}>{props.text}</p>
            </div>
        )
}

export default label
