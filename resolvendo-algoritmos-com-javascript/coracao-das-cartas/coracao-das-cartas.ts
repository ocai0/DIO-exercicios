const coracaoDasCartas = (entry) => {
    const numeroPilhas = parseInt(entry.shift())
    let countPilhas = 0;
    while(countPilhas++ < numeroPilhas) {
        const pilha = entry.shift().split(' ').map(i => parseInt(i))
        while(pilha.length) {
            const carta1 = pilha.shift() || 0
            const carta2 = pilha[1] || 0
            const carta3 = pilha[2] || 0
            const somaDosValores = carta1 + carta2 + carta3
            if(somaDosValores % 3 === 0) return 0
        }
    }
    return 1
}

module.exports = coracaoDasCartas