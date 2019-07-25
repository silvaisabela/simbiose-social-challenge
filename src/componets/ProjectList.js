import React, {Component} from 'react'

class ProjectList extends Component {

    componentDidMount(){
        fetch('http://api.salic.cultura.gov.br/v1/projetos/?limit=10')
        .then(function(response){
            response.json()
            .then((json) => console.log(json))
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