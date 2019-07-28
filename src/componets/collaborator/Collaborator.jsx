import React from 'react'
import Label from '../label/Label'
import Button from '../button/Button'
import './Collaborator.css'

function collaborator(props) {
    return (
        <div className="collaborator">
            <p>Aportaram este projeto:</p>
            <div className="collaborator__content">
                <div>
                    <Label text={props.collaborator} fontSize={14} color="gray" />
                </div>
                <Button text="Ver todos" type="secundary" />
            </div>
        </div>
    )
}

export default collaborator