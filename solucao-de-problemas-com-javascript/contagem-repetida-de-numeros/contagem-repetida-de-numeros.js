const contagemRepetidaNumeros = (entries) => {
    let numerosJaContados = [];
    entries.sort((a, b) => a - b);
    let texto = [];
    for(let numero of entries) {
        if(numerosJaContados.includes(numero)) continue;
        let numeroDeOcorrencias = entries.reduce((acc, number) => acc = (number === numero) ? acc + 1 : acc , 0);
        texto.push(`${numero} aparece ${numeroDeOcorrencias} vez(es)`);
        numerosJaContados.push(numero);
    };
    return texto
}

module.exports = contagemRepetidaNumeros