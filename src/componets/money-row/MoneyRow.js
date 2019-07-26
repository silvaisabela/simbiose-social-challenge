import React, {Component} from 'react'
import './MoneyRow.css'
import toCurrency from './MoneyRowLogic'

class MoneyRow extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={`money-row money-row-${this.props.color}`}>
                <p>{this.props.text}</p>
                <p>{toCurrency(this.props.number)}</p>
            </div>
        )
    }
}


export default MoneyRow