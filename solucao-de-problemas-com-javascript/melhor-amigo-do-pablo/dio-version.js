//Funciona
const melhorAmigoDoPablo = (entrada) => {
    const entradaFormatada = entrada.map(item => item.split(' '))
    const apenasQuemQuerSer = entradaFormatada
        .filter(item => item[1] === 'SIM')
        .map(item => item[0])
    apenasQuemQuerSer
        .filter((item, index, arr) => arr.indexOf(item) === index)
        .sort((a, b) => a === b ? 0 : a < b ? -1 : 1 )
        .map(item => console.log(item))
    entradaFormatada
        .filter(item => item[1] === 'NAO')
        .map(item => item[0])
        .filter((item, index, arr) => arr.indexOf(item) === index)
        .sort((a, b) => a === b ? 0 : a < b ? -1 : 1 )
        .map(item => console.log(item))

    const resposta = apenasQuemQuerSer.reduce(
        (ganhador, aluno) => {
            ganhador = (aluno.length > ganhador.length || ganhador === '')
                ? aluno
                : ganhador
            return ganhador
        },
        '')
    return resposta;
}

// let entries = []
// while(item = gets()) {
//     if(item == 'FIM') break;
//     entries.push(item)
// }

const a = melhorAmigoDoPablo([
    'Joao NAO', 'Carlos SIM', 'Abner NAO',
    'Samuel SIM', 'Ricardo NAO', 'Abhay SIM',
    'Samuel SIM', 'Andres SIM', 'Roberto NAO',
    'Carlos SIM', 'Samuel SIM', 'Samuel SIM',
    'Abhay SIM', 'Aline SIM', 'Andres SIM'
])

// const a = melhorAmigoDoPablo(entries)

console.log(`Amigo do Pablo:`)
console.log(a)