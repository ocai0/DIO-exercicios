let test = ['5 9', '5 2 6 3 6', '1 2 1', '2 3 1', '2 4 1', '2 5 1'] // 10

const masterGets = (entries: string[]) => ((testEntry) => testEntry.shift())(entries)
const gets = () => masterGets(test)
// ---------------------------------------------

let [numeroCidades, capacidadeCarga] = gets().split(' ').map(stringNum => parseInt(stringNum))
const numeroCidadesEstaDentroDoLimite = numeroCidades >= 2 && numeroCidades <= 104
const capacidadeCargaEstaDentroDoLimite = capacidadeCarga >= 1 && capacidadeCarga <= 100
let podeRodar = true

if(numeroCidadesEstaDentroDoLimite === false 
|| capacidadeCargaEstaDentroDoLimite === false)
    podeRodar = false;

const impostosAReceber = gets().split(' ').map(i => i.toString())
if(podeRodar) {

    const criarMapa = (limit: number) => {
        const i = [];
        while(--limit !== 0) {
            const [cidadeA, cidadeB, distancia] = gets().split(' ');
            i.push({cidadeA, cidadeB, distancia});
        }
        return i;
    }

    const map = criarMapa(numeroCidades);
    const cidadeComMaisVizinhos = map.reduce((acc, cur) => {

    })
    while(impostosAReceber.length !== 0) {

    }
}
