let entry = ['abcde abc ab abc', 'bcc as gggg gth gggg', '.']
const gets = () => entry.shift()

while(frase = gets()) {
    if(frase === '.') break
    let dicionario = []
    let fraseAbreviada = ''
    for(const palavra of frase.split(' ')) {
        if(palavra.length < 3) {
            fraseAbreviada += palavra + ' '
            continue
        }
        const caractereInicial = palavra[0]
        if(typeof dicionario[caractereInicial] === 'object') {
            if(dicionario[caractereInicial].palavra === palavra) {
                fraseAbreviada += dicionario[caractereInicial].abreviacao + ' '
                dicionario[caractereInicial].ocorrencias += 1
                continue
            }
            else fraseAbreviada += palavra + ' '
            continue
        }

        const abreviacao = caractereInicial + '.'
        const ocorrencias = 1
        dicionario[caractereInicial] = {abreviacao, palavra, ocorrencias}
        fraseAbreviada += abreviacao + ' '
    }

    console.log(fraseAbreviada)
    for(indice in dicionario) {
        console.log(dicionario[indice].ocorrencias)
        const [abreviacao, palavra] = [dicionario[indice].abreviacao, dicionario[indice].palavra]
        console.log(`${abreviacao} = ${palavra}`)
    }
}