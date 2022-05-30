const naoConsegueRemoverCartas = (pilhasDeCartas) => {
    let cartasDoTopo = []
    for(const pilha of pilhasDeCartas) cartasDoTopo.push(pilha[0])

    const consegueTirarUmaCarta = cartasDoTopo.reduce()
    return true
}
/** @param gets - Remova esse parametro se estiver no site da DIO */
const coracaoDasCartas = (gets) => {
    let entry
    while(entry = gets()) {
        /** Quantidade de pilhas que serão processadas */
        let numeroDePilhas = parseInt(entry)
        if(numeroDePilhas === 0) return;

        /** Possui todas as pilhas informadas (mas E) */
        let mapaDePilhas = []
        while(--numeroDePilhas !== 0) mapaDePilhas.push(gets().split(' ').map(carta => parseInt(carta)))

        const somaDeTodasAsCartas = mapaDePilhas.reduce((valorTotal, valorAtual) => valorTotal += valorAtual, 0)
        if(somaDeTodasAsCartas % 3 === 0) {
            console.log('0')
            return 0;
        }
        
        while(mapaDePilhas.length !== 0) {
            if(naoConsegueRemoverCartas(mapaDePilhas)) {
                console.log('0')
                return 0;
            }
        }
        return;
    }
}

module.exports = coracaoDasCartas