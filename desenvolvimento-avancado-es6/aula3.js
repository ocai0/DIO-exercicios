// //Symbols e Generators

// //adicionar iteradores em objetos (p usar o pread operator)

// //tenta entender

// Symbol.iterator;

// const obj = {
//     values: [1, 2, 3, 4],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next:() => {
//                 i++;
//                 return {
//                     value: this.values[i - 1],
//                     done: i > this.values.length
//                 }
//             }
//         }
//     }
// }

// const it = obj[Symbol.iterator]();
// console.log(it.next())

// for(let value of obj) {
//     console.log(value)
// }

// const now = [...obj, 3];
// console.log(now)

// //Generators
// //function* || yield [1, 2, 3, n];

function* allNaturalNumbers() {
    let initialvalue = 0;
    while(true) {
        yield initialvalue;
        ++initialvalue;
    }
}
const it = allNaturalNumbers();
console.log(it.next())
console.log(it.next())

//Gerando Iterator
const obj = {
    values: [1, 2, 3, 4, 123, 12,3 ,123,123,123,12,31,23 ,123 ],
    *[Symbol.iterator]() {
        for(var i=0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for(let value of obj) {
    console.log(value);
}