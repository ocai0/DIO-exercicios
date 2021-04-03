'use strict'
class Animal {
    constructor(paws, type) {
        this.patas = paws || 0;
        this.tipo  = type || "";
    }
}

class Dog extends Animal {
    constructor(paws) {
        super(paws, "Dog");
        this.morde = true;
    }
}

var a = new Dog(4);
console.log(a.patas)