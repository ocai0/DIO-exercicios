const contagemRepetidaNumeros = require('./contagem-repetida-de-numeros')

test('Contagem Repetida de Números', () => 
    expect(contagemRepetidaNumeros([12, 12, 3, 231, 123, 123]))
    .equals(['4 aparece 1 vez(es)', '8 aparece 2 vez(es)', '10 aparece 3 vez(es)', '260 aparece 1 vez(es)'])
)