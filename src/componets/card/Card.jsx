import React from 'react'
import CardHeader from '../card-header/CardHeader'
import CardBody from '../card-body/CardBody'
import CardFooter from '../card-footer/CardFooter'
import toolsImage from './tools.png'
import './Card.css'

function card(props) {
    return (
        <div className="card">
            <CardHeader title={props.name} image={toolsImage} />
            <CardBody
                title={props.proponent}
                type={props.area}
                city={props.city}
                article={props.framing}
                approved={props.valueApproved}
                catched={props.valueCatched}
                percent={props.percent}
                collaborator={props.collaborator} />
            <CardFooter />
        </div>
    )
}



export default card


