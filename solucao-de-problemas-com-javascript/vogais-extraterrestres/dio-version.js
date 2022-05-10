//Status: Passa
const getAllInputs = () => {
    let entries = []
    while(entry = gets()) entries.push(entry)
    return entries
}
const toInt = (bool) => bool ? 1 : 0
const vogaisExtraterrestres = (dicionario, frase) => {
    const arrayCaracteres = frase.replace(/\s/gi, '')
        .split('')
    return arrayCaracteres.reduce((acc, cur) => acc += toInt(cur.search(new RegExp(`[${dicionario}]`, 'gi')) === 0), 0)
}

let i = 0
const entries = getAllInputs()
while(i < entries.length - 1) {
    console.log(vogaisExtraterrestres(entries[i], entries[i + 1]))
    i += 2
}