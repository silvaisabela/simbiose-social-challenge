import React, {Component} from 'react'
import './Label.css'

class Label extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={`label label-${this.props.color}`}>
                <p style={{fontSize: `${this.props.fontSize}`}}>{this.props.text}</p>
            </div>
        )
    }
    


}



export default Label
