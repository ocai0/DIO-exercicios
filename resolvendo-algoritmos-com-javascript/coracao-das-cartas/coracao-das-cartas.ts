const obterTopoDasPilhas = todasAsPilhas => {
    let cartasDoTopo = []
    for(const pilha of todasAsPilhas) cartasDoTopo.push(pilha[0])
    return [cartasDoTopo.sort((a, b) => b - a), cartasDoTopo.reduce((valorTotal, valorDaCarta) => valorTotal += valorDaCarta, 0)]
}

/** @param gets - Remova esse parametro se estiver no site da DIO */
const coracaoDasCartas = (gets) => {
    let resultado = []
    let entry
    while(entry = gets()) {
        /** Quantidade de pilhas que serão processadas */
        let numeroDePilhas = parseInt(entry)
        if(numeroDePilhas === 0) return resultado;
        /** Possui todas as pilhas informadas */
        let mapaDePilhas = []
        while(numeroDePilhas !== 0) {
            const pilha = gets().split(' ').map(carta => parseInt(carta))
            mapaDePilhas.push(pilha);
            numeroDePilhas--
        }
        const [_, somaDeTodasAsCartas] = obterTopoDasPilhas(mapaDePilhas)
        if(somaDeTodasAsCartas % 3 !== 0) {
            resultado.push(0)
            continue
        }

        let pilhasModificaveis = mapaDePilhas
        let aindaPossuiCartas = pilhasModificaveis.reduce((resultado, pilha) => resultado = pilha.length > 0 )
        while(aindaPossuiCartas) {
            let [cartasDoTopo, valorTotal] = obterTopoDasPilhas(pilhasModificaveis)
            let numeroIdeal = valorTotal - (valorTotal % 3)
            for(const carta of cartasDoTopo) {
                if(numeroIdeal - carta < 0) {
                    resultado.push(0)
                    continue;
                }
                numeroIdeal -= carta
                pilhasModificaveis[cartasDoTopo.indexOf(carta)].shift()
                aindaPossuiCartas = pilhasModificaveis.reduce((resultado, pilha) => resultado = pilha.length > 0 )
            }
        }
        resultado.push(1);
    }
    return resultado;
}
// let _tema = [
//     '5', 
//     '2 1 1 2 1',
//     '1 1 1 2 1', 
//     '1 1 1 2 1', 
//     '2 1 1 2 1', 
//     '1 1 1 2 1',

//     '3',
//     '1',
//     '1',
//     '1',

//     '0',
// ];
// const gets = () => _tema.shift();
// console.log(coracaoDasCartas(gets))
module.exports = coracaoDasCartas