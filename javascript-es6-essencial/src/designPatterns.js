//Factory
function createPerson(name, customElements) {
    return {
        name: name,
        call: () => {
            return this.name;
        },
        ...customElements
    }
}

//Singleton
function Singular() {
    if(!Singular.instance) {
        Singular.instance = this;
    }
    return Singular.instance;
}
let p = Singular.call("a");
p = Singular.call("b");
console.log(p);

//Decorator
let auth = true;
function execIfAuth(fn) {
    return !!auth && fn();
}
function sum(a, b) {
    return a + b;
}
console.log(execIfAuth(() => sum(1, 2)));
auth = false;
console.log(execIfAuth(() => {return 2}));

//Observer
class Eye {
    constructor() {
        this.subscribed = [];
    }
    add(fn) {
        this.subscribed.push(fn);
    }
    notify(data) {
        this.subscribed.forEach(fn => fn(data));
    }
    del(fn) {
        this.subscribed = this.subscribed.filter(obs => obs !== fn);
    }
}
const comp = new Eye();
const log1 = data => console.log('Sub 1: ' + data);
const log2 = data => console.log('Sub 2: ' + data);
comp.add(log1);
comp.add(log2);
comp.notify('one');
comp.notify('two');

//Module
function getName() {
    return "Name";
}
function setName() {
    return "a";
}

module.exports = {
    getName,setName
};

class ID {
	static #contador = 0;

  static get contador() {
    return this.#contador;
  }

  static incrementaContador() {
    return ++this.#contador;
  }
}

class Cliente {
  #id = 0;

  constructor() {
    this.#id = ID.incrementaContador();
  }

  get id() {
    return this.#id;
  }
}

const c1 = new Cliente();
console.log(`Contador atual: ${ID.contador}.`);

const c2 = new Cliente();
const c3 = new Cliente();

console.log(`Contador atual: ${ID.contador}.`);