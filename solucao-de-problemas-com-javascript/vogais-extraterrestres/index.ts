const toInt = (bool: boolean) => bool ? 1 : 0
const removeAccents = (text: string) => {
    const withAccents    = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ'
    const withoutAccents = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh'
    return text.split('')
        .map(item => (withAccents.search(item) !== -1) ? withoutAccents[withAccents.search(item)] : item)
        .join('')
}
const vogaisExtraterrestres = (dicionario: string, frase: string) => {
    const arrayCaracteres = removeAccents(frase.replace(/[^0-9a-z-'0-9a-zÀ-ÿ]/gi, ''))
        .split('')
    return arrayCaracteres.reduce((acc, cur) => acc += toInt(cur.search(new RegExp(`[${dicionario}]`, 'g')) === 0), 0)
}


//Sample test Cases
console.log(vogaisExtraterrestres('aeiou', 'o rato roeu a roupa do rei de roma') === 16)
console.log(vogaisExtraterrestres('4310', 't3st3 p4r4 c0d1f1c4r') === 8)
console.log(vogaisExtraterrestres('kwy', 'the quick brown fox jumps over the lazy dog') === 3)
console.log(vogaisExtraterrestres('*9', '8 * 9 = 72, é quase 9') === 2)
console.log(vogaisExtraterrestres('ea', 'téstá a') === 3)
console.log(vogaisExtraterrestres('$a', '$a$$') === 1)
console.log(vogaisExtraterrestres('', '$a$$') === 0)
console.log(vogaisExtraterrestres(undefined, '$a$$') === 0)