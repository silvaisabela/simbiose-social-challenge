import React from 'react'
import './CardHeader.css'

function cardHeader(props) {
    return (
        <section className="card-header">
            <div className="card-header__content">
                <p>{props.title}</p>
                <div className="card-header__image">
                    <img src={props.image} alt="Projeto"/>
                </div>
            </div>
        </section>
    )
}

export default cardHeader