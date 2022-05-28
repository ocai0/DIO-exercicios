const entrevistaEmbaracosa = texto => {
    let indice = 0
    const POSSUI_MAIS_DE_DUAS = 3
    const POSSUI_DUAS = 2
    const POSSUI_APENAS_UMA = 1
    let status = undefined
    for(let _ of texto.split('')) {
        const tail = texto.substring(texto.length - indice - 1)
        const quantidadeDeRepeticoes = texto.match(new RegExp(tail, 'g'))
        console.log(quantidadeDeRepeticoes)
        if(quantidadeDeRepeticoes !== 2) status = POSSUI_MAIS_DE_DUAS
        else if(quantidadeDeRepeticoes === 2) status = POSSUI_DUAS
        else if(quantidadeDeRepeticoes < 2 && status === POSSUI_DUAS) status = POSSUI_APENAS_UMA
        if(status === POSSUI_APENAS_UMA) { return texto.substring(0, texto.length - indice) }
        const jaChegouAoFinalDaPesquisa = texto.length - 1 === indice
        if(status === POSSUI_MAIS_DE_DUAS && jaChegouAoFinalDaPesquisa) { }
        indice++
    }
    return texto
}

console.log(entrevistaEmbaracosa('aieaieaie'))
// console.log(entrevistaEmbaracosa('sanduicheiche'))
// console.log(entrevistaEmbaracosa('barrilarril'))
// console.log(entrevistaEmbaracosa('ratoato'))
// console.log(entrevistaEmbaracosa('sol'))
// console.log(entrevistaEmbaracosa('coliseueu'))
// console.log(entrevistaEmbaracosa('queijoijo'))
// console.log(entrevistaEmbaracosa('astroastro'))
// console.log(entrevistaEmbaracosa('a'))