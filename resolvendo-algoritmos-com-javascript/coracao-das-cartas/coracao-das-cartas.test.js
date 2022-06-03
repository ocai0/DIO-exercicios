const fn = require('./coracao-das-cartas')
const fabricaDeGets = require('../../tools/fabricaDeGets').fabricaDeGets

test('Todas Passam', () => {
    const entry = [
        '3',
        '2 1 1',
        '2 2 1',
        '2 0 1',
        
        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([1])
})
test('A Última fila não deixa passar', () => {
    const entry = [
        '3',
        '2 1 1',
        '2 1 2',
        '2 1 1',
        
        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([0])
})
test('1ª pilha passa, 2ª não passa', () => {
    const entry = [
        '2',
        '2 1 2',
        '1 2 1',
        
        '2',
        '1 2',
        '1 2',
        
        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([0, 0])
})
test('Não deve passar', () => {
    const entry = [
        '2',
        '0',
        '0',

        '3',
        '0 0 0',
        '0 0 0',
        '0 0 0',
        
        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([0, 0])
})
test('Deve ignorar a última fila, já que possui o número de pilhas setado em \'0\'', () => {
    const entry = [
        '2',
        '1 1 1',
        '1 1 1',

        '3',
        '2 2 2',
        '2 2 2',
        '2 2 2',
        
        '0',
        '9 8 8',
        '9 7 7',
        
        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([0, 1])
})

test('', () => {
    entry = [
        '3',
        '1 1 1',
        '2 2 1',
        '3 4 3',

        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([1])
})
test('', () => {
    entry = [
        '3',
        '1 1 1',
        '2 2 1',
        '3 4 2',

        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([0])
})
test('', () => {
    entry = [
        '3',
        '1 2 1',
        '1 1 0',
        '1 1 1',

        '0'
    ]
    expect(fn(fabricaDeGets(entry))).toEqual([1])
})