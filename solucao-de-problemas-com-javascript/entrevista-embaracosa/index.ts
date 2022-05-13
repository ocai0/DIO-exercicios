const entrevistaEmbaracosa = texto => {
    let indice = 0
    const NEXT_STEP = 1
    for(let _ of texto.split('')) {
        const tail = texto.substring(texto.length - indice - NEXT_STEP)
        const hasOnlyOneAgain = texto.match(new RegExp(tail, 'gi')).length === 2
        if(hasOnlyOneAgain === false) {
            const resultado = texto.substring(0, texto.length - indice)
            console.log(resultado)
            return resultado
        }
        indice++
    }
    return texto
}

console.log(entrevistaEmbaracosa('sanduicheiche'))
console.log(entrevistaEmbaracosa('barrilarril'))
console.log(entrevistaEmbaracosa('ratoato'))
console.log(entrevistaEmbaracosa('sol'))
console.log(entrevistaEmbaracosa('coliseueu'))
console.log(entrevistaEmbaracosa('queijoijo'))
console.log(entrevistaEmbaracosa('astroastro'))
console.log(entrevistaEmbaracosa('a'))