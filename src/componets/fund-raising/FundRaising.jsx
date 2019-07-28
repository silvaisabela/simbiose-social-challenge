import React from 'react'
import MoneyRow from '../money-row/MoneyRow'
import PercentRow from '../percent-row/PercentRow'
import './FundRaising.css'

function fundRaising(props) {
    return (
        <div className="card-board">
            <MoneyRow text="Aprovado" number={props.approved} color="blue" />
            <MoneyRow text="Captado" number={props.catched} color="green" />
            <PercentRow percent={props.percent} />
        </div>
    )
}

export default fundRaising