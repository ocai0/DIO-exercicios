const obterTopoDasPilhas = todasAsPilhas => {
    let cartasDoTopo = []
    for(const pilha of todasAsPilhas) cartasDoTopo.push(pilha)
    return [cartasDoTopo.sort((a, b) => b - a), cartasDoTopo.reduce((valorTotal, valorDaCarta) => valorTotal += valorDaCarta, 0)]
}
/** @param gets - Remova esse parametro se estiver no site da DIO */
const coracaoDasCartas = (gets) => {
    let entry
    while(entry = gets()) {
        /** Quantidade de pilhas que serão processadas */
        let numeroDePilhas = parseInt(entry)
        if(numeroDePilhas === 0) continue;

        /** Possui todas as pilhas informadas */
        let mapaDePilhas = []
        while(--numeroDePilhas !== 0) mapaDePilhas.push(gets().split(' ').map(carta => parseInt(carta)))

        const somaDeTodasAsCartas = mapaDePilhas.reduce((valorTotal, valorAtual) => valorTotal += valorAtual, 0)
        if(somaDeTodasAsCartas % 3 === 0) {
            console.log('1')
            return 1;
        }
        
        // while(mapaDePilhas.length !== 0) {
        //     let [cartasDoTopo, valorTotal] = obterTopoDasPilhas(mapaDePilhas)
        //     const valorIdeal = valorTotal - (valorTotal % 3)
        //     while(cartasDoTopo.length) {

        //     }
        // }
        return 0;
    }
}

module.exports = coracaoDasCartas