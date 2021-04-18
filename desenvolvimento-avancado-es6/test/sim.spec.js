const { utils } = require("mocha");
const assert = require("assert");
const Sim = require("../src/sim.js");
const expect = require('chai').expect;

describe("Testes da classe 'Sim'", function() {
    const test = new Sim();
    //.skip => pula o teste
    //.only => só executa este teste
    it("(Assíncrona) Retorna 5", function(done) {
        this.timeout(3000); // O limite é 2000ms, mas usando function dá pra aumentar
        try {
            test.sum(2, 3, (value) => {
                assert.strictEqual(value, 5);
                done();
            })
        }
        catch(err) { console.log(err); }
                
    });
    it("(Assíncrona) Retorna Hi", function(done) {
        try {
            this.timeout(3000); // O limite é 2000ms, mas usando function dá pra aumentar
            assert.strictEqual(test.call(), "Hi");
            done();
        }
        catch(err) {
            console.log(err);
        }
    });
    it("Multiplica por 3"); //Funciona como To-do para o dev
});
describe("Testes da classe 'Sim' com o chai", function() {
    const test = new Sim();
    //.skip => pula o teste
    //.only => só executa este teste
    it.skip("(Assíncrona) Retorna 5", function(done) {
        this.timeout(3000); // O limite é 2000ms, mas usando function dá pra aumentar
        try {
            test.sum(2, 3, (value) => {
                // assert.strictEqual(value, 5);
                expect(value).to.equal(5);
                done();
            })
        }
        catch(err) { console.log(err); }
                
    });
    it("(Assíncrona) Retorna Hi", function(done) {
        try {
            this.timeout(3000); // O limite é 2000ms, mas usando function dá pra aumentar
            assert.strictEqual(test.call(), "Hi");
            done();
        }
        catch(err) {
            console.log(err);
        }
    });
    it.skip("Possui propriedade name", function() {
        expect(test).to.have.property(name).equal("A");
        console.log(err);
    }); //Funciona como To-do para o dev
});
//A ver Hooks => beforeEach(function() {});

describe("Usando SInon", function() {
    it.only("Testando Sinon e sua funcção .spy", function() {
        const fun = {
            invoke: () => "It's Fun",
        };
        sinon.spy(fun,  'invoke');
        //.stub().returns() => Muda o retorno da função
        //.restore() => restaura o return
        expect()
    });
});