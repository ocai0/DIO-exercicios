const fn = require('./produto-e-divisao')

test('[\'3\', \'2 *\', \'1 /\', \'3 *\']', () => {
    expect(produtoEDivisao(['3', '2 *', '1 /', '3 *']))
    .toBe(6)
})
test('[\'3\', \'2 *\', \'1 /\', \'33 *\']', () => {
    expect(produtoEDivisao(['3', '2 *', '1 /', '33 *']))
    .toBe(66)
})