const contagemRepetidaNumeros = require('./contagem-repetida-de-numeros')

test('Contagem Repetida de Números', () => expect(contagemRepetidaNumeros([12, 12, 3, 231, 123, 123])).toEqual(['3 aparece 1 vez(es)', '12 aparece 2 vez(es)', '123 aparece 2 vez(es)', '231 aparece 1 vez(es)']))
test('Contagem Repetida de Números', () => expect(contagemRepetidaNumeros([12, 12, 12, 12, 12, 12])).toEqual(['12 aparece 6 vez(es)']))
test('Contagem Repetida de Números', () => expect(contagemRepetidaNumeros([10])).toEqual(['10 aparece 1 vez(es)']))