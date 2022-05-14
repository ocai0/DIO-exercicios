let test = [ '3', '2 *', '1 *', '3 *', '6' ]
const gets = (test) => test.shift()

const produtoEDivisao = (test: string[]) => {
    let typedInput, lastValue = 1
    while(typedInput = gets(test)) {
        let number = parseInt(typedInput.replace(/[^0-9]/gi, '').split('')[0])
        let operation = typedInput.replace(/[^\*\/]/gi, '')
        if(operation === '*') lastValue *= number
        if(operation === '/') lastValue /= number
    }
    return lastValue
}
console.log(produtoEDivisao(test))
test = ['3', '22 *']
console.log(produtoEDivisao(test))
test = ['3', '22 *', '7 /']
console.log(produtoEDivisao(test))
