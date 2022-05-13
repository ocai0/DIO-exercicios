let test = `3
abc
dae
abcde
2
abc
def
0
`.split('\n')
const gets = () => test.shift()
let inputCounter: string;
while(inputCounter = gets()) {
    if(inputCounter === '0') break;
    
    let numOfRows = parseInt(inputCounter)
    let i = 0
    let rows: string[] = []
    while(i < numOfRows) {
        rows.push(gets())
        i++
    }

    let result = 'Conjunto Bom'
    for(let testWord of rows) {
        for(let wordToBeTested of rows) {
            if(testWord === wordToBeTested) continue
            const test = wordToBeTested.search(testWord)
            if(test === 0) {
                result = 'Conjunto Ruim'
                break;
            }
        }
    }
    console.log(result)
}