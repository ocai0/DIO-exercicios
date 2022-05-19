let _a = [
    '2',
    '1 1 1',
    '2 0 4',
    '3',
    '1 0 0',
    '0 1 0',
    '0 0 0',
    '0'
]
const gets = () => _a.shift()

let qtdPilhas
let ganha
while(qtdPilhas = parseInt(gets())) {
    if(qtdPilhas === 0) break;
    let valorTotalPilha = 0
    while(qtdPilhas) {
        valorTotalPilha += gets().split(' ').map(i => parseInt(i)).reduce((acc, cur) => acc += cur, 0)
        ganha = (ganha === false)
            ? false
            : (valorTotalPilha % 3 === 0) ? 1 : 0
        qtdPilhas--
    }
    console.log(ganha)
}
