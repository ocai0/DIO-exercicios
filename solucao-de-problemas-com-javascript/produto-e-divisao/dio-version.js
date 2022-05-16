let _a = ['3', '2 /', '3 /', '6 *']
_a = [
'11',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 *',
'9 /'
]
const gets = () => _a.shift()

let resultado, numeroInteracoes
let podeRodar = true
const safeMultiply = (a, b) => {
    if(Number(a) * Number(b) > Number.MAX_SAFE_INTEGER) return BigInt(a) * BigInt(b)
    return a * b
}
const safeDivision = (a, b) => {
    if(Number(a) / Number(b) > Number.MAX_SAFE_INTEGER) return BigInt(a) / BigInt(b)
    return a / b
}

while(podeRodar) {
    resultado = 1
    numeroInteracoes = parseInt(gets())

    if(numeroInteracoes === '' || numeroInteracoes < 1 || numeroInteracoes > 100000) {
        podeRodar = false
        break
    }

    for(let i = 0; i < numeroInteracoes; i++) {
        let [numero, operador] = gets().split(' ')
        numero = parseInt(numero);

        if(operador === '*') resultado = safeMultiply(resultado, numero)
        else if(operador === '/') resultado = safeDivision(resultado, numero)
    }
    podeRodar = false

    let imprimaValor = (typeof resultado === 'bigint') 
        ? resultado.toString()
        : resultado

    console.log(imprimaValor)
}