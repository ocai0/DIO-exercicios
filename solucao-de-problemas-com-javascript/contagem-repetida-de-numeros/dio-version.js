//Status: Passa
let entries = [];
let entry;
let counted = [];
const log = (i) => console.log(i);
while(entry = gets()) entries.push(entry);
entries.shift();
entries.sort((a, b) => a - b);
let a = entries.forEach((item, _, ref) => {
    if(counted.includes(item)) return;
    let counter = ref.reduce((acc, number) => (number === item) ? ++acc : acc, 0);
    log(`${item} aparece ${counter} vez(es)`);
    counted.push(item);
});