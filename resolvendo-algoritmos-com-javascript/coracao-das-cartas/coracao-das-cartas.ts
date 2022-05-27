const coracaoDasCartas = (entry) => {
    const numeroPilhas = parseInt(entry.shift())
    let countPilhas = 0;
    while(countPilhas++ < numeroPilhas) {
        const pilha = entry.shift().split(' ').map(i => parseInt(i))
        let countCartas = 0
        while(countCartas++ < pilha.length) {
            const res1 = pilha[countCartas] % 3
            //Se existir outra carta logo apos
            let res2 = -1
            if(pilha[countCartas + 1] !== undefined) {
                res2 = pilha[countCartas] + pilha[countCartas + 1] % 3
            }
            let res3 = -1
            if(pilha[countCartas + 2] !== undefined) {
                res3 = pilha[countCartas] + pilha[countCartas + 1] + pilha[countCartas + 2] % 3
            }

            if(res1 === 0 && res2 === 0 && res3 === 0) {
                return 0
            }

        }
    }
    return 1
}

module.exports = coracaoDasCartas