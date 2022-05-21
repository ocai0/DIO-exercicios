const toInt = (bool) => bool ? 1 : 0
const removeAccents = (text) => {
    const withAccents    = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ'
    const withoutAccents = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh'
    return text.split('')
        .map(item => (withAccents.search(item) !== -1) ? withoutAccents[withAccents.search(item)] : item)
        .join('')
}
const vogaisExtraterrestres = (dicionario, frase) => {
    return frase
        .split('')
        .reduce((acc, cur) => 
            acc += toInt(cur.search(new RegExp(`[${dicionario}]`, 'g')) === 0)
        , 0)
}

module.exports = vogaisExtraterrestres