// let test = [ '3', '2 *', '1 *', '3 *'] //Passa
let test = [ '11', '9 *', '9 *', '9 *', '9 *', '9 *', '9 *', '9 *', '9 *', '9 *', '9 *', '9 /', '8 *' ] //Passa
const gets = () => test.shift()

let entry
let lastValue = 1
while(entry = gets()) {
    const numOfLines = entry
    for(let i = 0; i< numOfLines;i++) {
        let _entry = gets().replace(' ', '')
        let num = parseInt(_entry)
        let op = _entry[1]
        if(op == '*') {
            lastValue *= num
        }
        if(op == '/') {
            lastValue /= num
        }
    }
}
console.log(lastValue)