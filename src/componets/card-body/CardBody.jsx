import React from 'react'
import Label from '../label/Label'
import FundRaising from '../fund-raising/FundRaising'
import Collaborator from '../collaborator/Collaborator'
import './CardBody.css'

function cardBody(props) {
    return (
        <div className="card-body">
            <div className="card-body__content">
                <p className="card-body__title" >{props.title}</p>
                <p className="card-body__type">{props.type}</p>
                <div>
                    <p>{props.city}</p>
                    <Label
                        text={`ROUANET - ${props.article.replace("Artigo", "Art")}`}
                        fontSize={15}
                        color="green" />
                </div>
            </div>
            <FundRaising
                approved={props.approved}
                catched={props.catched}
                percent={props.percent} />
            <Collaborator
                collaborator={props.colaborator} />
        </div>
    )
}

export default cardBody