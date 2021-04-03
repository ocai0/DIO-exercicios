const createNewGameRecord = (platform) => {
    return (genre) => {
        return (gameName) => {
            return {
                name: gameName,
                genre: genre,
                platform: platform
            }
        }
    }
}
const addNES    = createNewGameRecord("Nintendo Entertainment System");
const addSNES   = createNewGameRecord("Super Nintendo Entertainment System");
const addPS1    = createNewGameRecord("Play Station 1");

let records = [];
records.push(addNES("Platformer")("Super Mario Bros. 3"));
records.push(addNES("Action")("Metroid"));
records.push(addNES("Shooter")("Duck Hunt"));
records.push(addSNES("Action")("Actraiser 2"));
records.push(addSNES("Platformer")("Goof Troop"));
records.push(addPS1("Horror")("Silent Hill"));
records.push(addPS1("RPG")("Disgaea"));
records.log = () => "Call log";

for(index in records) {
    console.log("índice com \'for in\': " + index);
}
for(index of records) {
    console.log('índice com \'for of\'(Associdados não são pegos): ' + index);
}

const help_object = {
    values: {
        name: "Object.values([Object])",
        desc: "Mostra os valores do [Object]"
    },
    keys: {
        name: "Object.keys([Object])",
        desc: "Mostra todos os índices/chaves que um [Object] possui"
    },
    entries: {
        name: "Object.entries([Object])",
        desc: ""
    },
    delete: {
        name: "delete [Object].key",
        desc: ""
    },
    assign: {
        name: "Object.assign([Object], value)",
        desc: ""
    },
    freeze: {
        name: "Object.freeze([Object])",
        desc: "Não permite --"
    },
    seal: {
        name: "Object.seal([Object])",
        desc: ""
    }
}
const help_symbol = {
    desc: "serve de enum",
    prop: {
        name: {
            code: "Symbol([String])",
            desc: "Instancia um Symbol"
        },
        findSymbols: {
            code: "Object.getOwnPropertySymbols([Object])",
            desc: "Lista todos os symbols que um Object possui"
        },
        reflect: {
            code: "Reflect.ownKeys([Object])",
            desc: ""
        }
    }

}
/*Functions*/

//Tipos de retorno
function soma() {
    return " Retorno explicito";
}
const c = () => "retorno implícito - Arrow";
const b = () => {
    return " Retorno explicito - Arrow";
}

//Functions são objetos
soma.desc = "dá pra fazer isso";

//Arrow Functions com curring
const executeFunctionHandler = () => fnParam => allowed => {
    //executa se allowed = true
    if(allowed) {
        fnParam();
    }
}
const exec_c = executeFunctionHandler(c);
exec_c(true);
exec_c(false);

//Diferenças entre arrow function e coomon function (this)

//.isArray
//,length
//[Object].map(item[, index, [Object]], => { item.attr = value; return item;}) => cria um novo array com os novos atributos
//.filter([Object], condition) => filtra os elementos que compõem o array, retornando um novo array com os que comportam a condição descrita.
//.reduce((iterator, item) => {//logic here}, initialValue)
/*
    .reduce manipula valores de um objecto e retorna o resultado para a variavel a qual está sendo vinculada;
    const allAges = obj.reduce(counter, person => {
        //captura todos os valores de cada person em counter
        counter += person.age;
        //retorna counter para allAges
        retur counter;
        //o 0 abaixo define o tipo de allAges
    }, 0);
*/

//Estrutuas de repetição
//do..while, for, for in [aceita indices num e assoc], for of [so num]
//continue (pula elemento ), break (quebra laço de repetição)

//Function.call()


'use strict'

class Dog {
    #name = "";
    constructor(name) {
        this.#name = name;
    }
    get name() {return this.#name;}
    set name(newName) {
        if(this.#name !== newName) return false;
        else this.#name = newName;
    }
    static call() {
        return "Hi";
    }
    olocao() {
        return "olocao";
    }
}

const a = new Dog("ola");
console.log(Dog.call())
