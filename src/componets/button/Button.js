import React, {Component} from 'react'
import './Button.css'

class Button extends Component {

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <button className="button-primary">{this.props.text}</button>
            </div>
        )
    }
}

export default Button