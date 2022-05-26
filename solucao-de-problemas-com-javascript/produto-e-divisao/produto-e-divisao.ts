const produtoEDivisao = function(test) {
    const gets = () => test.shift()
    /** É o valor total gerado pela interação que será impresso no final do programa, de acordo com o eninciado, ele deve começar com 1 */
    let resultadoFinal = 1
    /** número de entradas que o programa vai receber */
    let numeroDeEntradas = parseInt(gets())
    console.log(numeroDeEntradas)
    while(numeroDeEntradas-- > 0) {
        const [numero, operador] = gets().split(' ')
        if(operador === '*') resultadoFinal *= parseInt(numero)
        if(operador === '/') resultadoFinal /= parseInt(numero)
    }
    console.log(resultadoFinal)
    return resultadoFinal
}
export {produtoEDivisao}

console.log(produtoEDivisao(['3', '2 *', '1 /', '3 *']) === 6)
console.log(produtoEDivisao(['3', '2 *', '1 /', '33 *']) === 66)
console.log(produtoEDivisao(['3', '2 *', '1 /', '3 *']) === 6)
console.log(produtoEDivisao(['3', '2 *', '1 /', '3 *']) === 6)
console.log(produtoEDivisao(['3', '2 *', '1 /', '3 *']) === 6)
