const masterGets = (entries: string[]) => ((testEntry) => testEntry.shift())(entries)
const produtoEDivisao = (test: string[]) => {
    /**
     * Essa função existe apenas para facilitar a cópia da solução para o site da DIO sem muitos problemas além da sintaxe do `TypeScript`
     * 
     * @returns Uma função que se comporta da mesma forma que no site.
     */
    const gets = () => masterGets(test)
    // Copie o código a partir daqui

    const estaForaDoNumeroAceitoDeLinhas = (quantidadeLinhas) => {
        const MINIMO_ACEITO = 1
        const MAXIMO_ACEITO = 100000
        if(quantidadeLinhas < MINIMO_ACEITO) return true
        if(quantidadeLinhas > MAXIMO_ACEITO) return true
        return false
    }
    const multiplicacaoSegura = (a, b) => {
        if((a * b) > Number.MAX_SAFE_INTEGER) return BigInt(a) * BigInt(b)
        return a * b
    }
    const divisaoSegura = (a, b) => {
        if((a / b) > Number.MAX_SAFE_INTEGER) return BigInt(a) / BigInt(b)
        return a / b
    }
    const quantidadeDeLinhas = parseInt(gets())
    let oCodigoPodeRodar = true
    while(oCodigoPodeRodar) {
        // Como no final, este código será enviado a um site em forma imperativa, o return não funciona
        // if(estaForaDoNumeroAceitoDeLinhas(quantidadeDeLinhas)) return
        
        if(estaForaDoNumeroAceitoDeLinhas(quantidadeDeLinhas)) {
            oCodigoPodeRodar = false
            continue
        }
        let valor: number | BigInt = 1
        let proximaOperacao
        let iteracao = 0
        while(iteracao < quantidadeDeLinhas) {
            proximaOperacao = gets()
            let [numero, operador] = proximaOperacao.split(' ')
            if(operador === undefined) {
                oCodigoPodeRodar = false
                continue
            }
            numero = parseInt(numero)
            if(operador === '*') valor = multiplicacaoSegura(valor, numero)
            if(operador === '/') valor = divisaoSegura(valor, numero)
            iteracao++
        }
        console.log((typeof valor === 'bigint') ? valor.toString() : valor)
        oCodigoPodeRodar = false
    }
}


// Testes


produtoEDivisao(['1', '22 *', '6', '23 *'])
// produtoEDivisao(['3', '22 *', '7 /'])
// produtoEDivisao([ '3', '2 *', '1 *', '3 *', '6' ])
