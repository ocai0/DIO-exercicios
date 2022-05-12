//Esse código falha por algum motivo dentro da plataforma da DIO

const toInt = (bool: boolean) => bool ? 1 : 0
const removeAccents = (text: string) => {
    const withAccents    = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ'
    const withoutAccents = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh'
    return text.split('')
        .map(item => (withAccents.search(item) !== -1) ? withoutAccents[withAccents.search(item)] : item)
        .join('')
}
const vogaisExtraterrestres = (dicionario: string, frase: string) => {
    return frase.replace(/[^0-9a-z]/gi, '')
        .split('')
        .reduce((acc, cur) => 
            acc += toInt(cur.search(new RegExp(`[${dicionario}]`, 'g')) === 0)
        , 0)
}

//Test 
let test = `aeiou
o rato roeu a roupa do rei de roma
4310
t3st3 p4r4 c0d1f1c4r
kwy
the quick brown fox jumps over the lazy dog
aá
testaaaaaasasasa á
`.split('\n')
const gets = () => test.shift()

//Main 
let entry: string;
while(entry = gets()) {
    const [vogais, frase] = [entry, gets()]
    console.log(vogaisExtraterrestres(vogais, frase))
}