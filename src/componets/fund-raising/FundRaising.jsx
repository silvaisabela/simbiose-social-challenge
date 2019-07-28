import React from 'react'
import MoneyRow from '../money-row/MoneyRow'
import PercentRow from '../percent-row/PercentRow'
import './FundRaising.css'
import calculatePercent from '../percent-row/PercentLogic'

function fundRaising(props) {
    return (
        <div className="card-board">
            <MoneyRow text="Aprovado" number={props.approved} color="blue" />
            <MoneyRow text="Captado" number={props.catched} color="green" />
            <PercentRow percent={calculatePercent(props.approved, props.catched)} />
        </div>
    )
}

export default fundRaising