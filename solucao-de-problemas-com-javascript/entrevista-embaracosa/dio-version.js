let test = `sanduicheiche
barrilarril
ratoato
sol
coliseueu
queijoijo
astroastro
a
supersrs
`.split('\n')
test = `supersrs
subaba
alibbaba
baalibaba`.split('\n')
const gets = () => test.shift()

while(texto = gets()) {
    let indice = 0
    const NEXT_STEP = 1
    let smallestAmountOfRecourrence = texto.split('').length
    for(let _ of texto.split('')) {
        const tail = texto.substring(texto.length - indice - NEXT_STEP)
        let hasOnlyOneAgain = (texto.match(new RegExp(tail, 'gi')).length < smallestAmountOfRecourrence)
            ? texto.match(new RegExp(tail, 'gi')).length
            : smallestAmountOfRecourrence
        if(hasOnlyOneAgain === 1) {
            const resultado = texto.substring(0, texto.length - indice)
            console.log(resultado)
            break;
        }
        indice++
    }
}