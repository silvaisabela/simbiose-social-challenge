import React from 'react';
import Button from '../button/Button'
import './CardFooter.css'

function cardFooter() {
    return (
        <div className="card-footer">
            <div className="card-footer__content">
                <div className="card-footer__buttons">
                    <Button type="primary" image="maximize" />
                    <Button type="primary" image="user" />
                    <Button type="primary" image="home" />
                </div>
                <Button text="Me escolhe :D" type="primary" />
            </div>
        </div>
    )
}

export default cardFooter