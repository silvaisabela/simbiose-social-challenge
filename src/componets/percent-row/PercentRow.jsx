import React, {Component} from 'react'
import './PercentRow.css'

class PercentRow extends Component{

    render(){
        return(
            <div className="percent-container">
                <p className="percent-row" style={{width: `${this.props.percent}%`}}>{this.props.percent}%</p>
            </div>
        )
    }
}


export default PercentRow