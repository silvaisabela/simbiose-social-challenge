import React, {Component} from 'react'
import presentationSchema from './ProjectLogic'

class ProjectList extends Component {

    componentDidMount(){
        fetch('http://api.salic.cultura.gov.br/v1/projetos/?limit=10')
        .then(function(response){
            response.json()
            .then((json) => console.log(presentationSchema(json)))
        })
    }

    render(){
        return(
            <div>
                <p>Isabela</p>
            </div>
        )
    }

}

export default ProjectList