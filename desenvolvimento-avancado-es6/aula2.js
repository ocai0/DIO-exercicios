//rest Operator (...[nome-da-variável])
//- Usado nos atributos da função, diz que a função aceita n valores e todos serão convertidos em um array

//Spread Operator (...[nome-da-variavel])
//- Usado nas chamadas, insere cada valor de um array como um parametro requisitado em uma função
//- Também pode ser usado para clonar ou concatear arrays. Ex: [...arr, 1, 2, 3];

//Destructing

const array1 = [1, 2,3, 3, 6, 7];
var [val1, val2] = array1;
const obj1 = {prop: "vlue", props: {name: "foo", ages: [20, 21, 32]}}
var {
    prop: objProp,
    props: {
        name: propName,
        ages: [age1, age2, age3]
    }
} = obj1;
    console.log(objProp);

const values = [12, 234, 76, 123, 76, 1234, 12];
function sum([a, b] = [0, 1]) {
    console.log(a + b);
}

sum(values);
sum();