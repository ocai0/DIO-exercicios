const melhorAmigoDoPablo = (entrada: string[]) => {
    const entradaFormatada = entrada.map(item => item.split(' '))
    const apenasQuemQuerSer = entradaFormatada.filter(item => item[1] === 'SIM')
    const resposta = apenasQuemQuerSer.reduce(
        (ganhador, aluno) => {
            ganhador = (aluno[0].length > ganhador.length || ganhador === '')
                ? aluno[0]
                : ganhador
            return ganhador
        },
        '')
    return resposta;
}
console.log(melhorAmigoDoPablo([
    'Joao NAO', 'Carlos SIM', 'Abner NAO',
    'Samuel SIM', 'Ricardo NAO', 'Abhay SIM',
    'Samuel SIM', 'Andres SIM', 'Roberto NAO',
    'Carlos SIM', 'Samuel SIM', 'Samuel SIM',
    'Abhay SIM', 'Aline SIM', 'Andres SIM'
]) === 'Carlos')