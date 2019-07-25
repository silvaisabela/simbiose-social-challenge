function presentationSchema(serverSchema){
    return {
        projetos: serverSchema._embedded.projetos.map(projectPresentationSchema)
    }
}

function projectPresentationSchema(projectServerSchema){
    return{ 
        name: projectServerSchema.nome,
        proponent: projectServerSchema.proponente,
        area: projectServerSchema.area,
        city: projectServerSchema.municipio,
        uf: projectServerSchema.UF,
        framing: projectServerSchema.enquadramento,
        valueApproved: projectServerSchema.valor_projeto,
        valueCatched: projectServerSchema.valor_captado,
        collaborator: projectServerSchema._links.incentivadores
    }
}

export default presentationSchema