import { criarResposta } from '../tools/criarResposta'

export const contagemRepetidaNumeros = (entries) => {
    let numerosJaContados = [];
    entries.shift();
    entries.sort((a, b) => a - b);
    const resp = criarResposta();
    let a = entries.forEach((item, _, ref) => {
        if(numerosJaContados.includes(item)) return;
        let counter = ref.reduce((acc, number) => (number === item) ? ++acc : acc, 0);
        resp.adicionar(`${item} aparece ${counter} vez(es)`);
        numerosJaContados.push(item);
    });
    return resp.resposta
}

module.exports = contagemRepetidaNumeros