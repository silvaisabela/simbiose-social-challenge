import React, { Component } from 'react'
import Card from '../../componets/card/Card'
import './ProjectList.css'
import Loading from '../../componets/loading/Loading'

const BASE_URL = "http://api.salic.cultura.gov.br/v1"

class ProjectList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            projects: []
        }
    }

    async componentDidMount() {
        const result = await this.fetchProjectsWithCollaborators()
        this.setState({
            projects: result,
            isLoading: false
        })
    }

    async fetchProjectsWithCollaborators() {
        const projects = await this.fetchProjects()
        return Promise.all(projects.map(async (project) => {
            const collaborator = await this.fetchCollaborators(project)
            project.colaborador = collaborator
            return project;
        }))
    }

    async fetchCollaborators(project) {
        return fetch(project._links.incentivadores)
            .then(response => response.json())
            .then(json => json._embedded.incentivadores[0].nome)
            .catch(() => "Não há incetivadores, seja o primeiro!")
    }

    async fetchProjects() {
        return fetch(`${BASE_URL}/projetos/?limit=20`)
            .then(response => response.json())
            .then(json => json._embedded.projetos)
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {!this.state.isLoading &&
                    <div className="project">
                        {this.state.projects.map((project) => (
                            <Card
                                key={project.PRONAC}
                                name={project.nome}
                                proponent={project.proponente}
                                valueApproved={project.valor_projeto}
                                valueCatched={project.valor_captado}
                                area={project.area}
                                city={`${project.municipio} -   ${project.UF}`}
                                framing={project.enquadramento}
                                collaborator={project.colaborador} />
                        ))}
                    </div>
                }
            </div>
        )
    }

}

export default ProjectList