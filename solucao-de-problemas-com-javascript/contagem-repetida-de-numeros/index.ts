import { arrayEquals } from '../tools/arrayEquals'
import { criarResposta } from '../tools/criarResposta'

export const contagemRepetidaNumeros = (entries: Array<number>) => {
    let numerosJaContados: Array<number> = [];
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
const def1 = arrayEquals(contagemRepetidaNumeros([12, 12, 3, 231, 123, 123]), ['4 aparece 1 vez(es)',
'8 aparece 2 vez(es)',
'10 aparece 3 vez(es)',
'260 aparece 1 vez(es)'])
console.log(def1)
