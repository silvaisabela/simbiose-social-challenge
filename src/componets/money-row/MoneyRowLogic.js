function toCurrency(number){
    return Number(number).toLocaleString('pt-BR', { style:'currency', currency: 'BRL'})
}

export default toCurrency