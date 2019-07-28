import React from 'react'
import './MoneyRow.css'
import toCurrency from './MoneyRowLogic'

function moneyRow(props) {
        return(
            <div className={`money-row money-row-${props.color}`}>
                <p>{props.text}</p>
                <p>{toCurrency(props.number)}</p>
            </div>
        )
}

export default moneyRow