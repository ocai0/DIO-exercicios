const fn = require('./coracao-das-cartas')

test('Test 1', () => {
    const entry = [
        '2',
        '2 2 2',
        '1 1 1'
    ]
    expect(fn(entry)).toBe(1)
})
test('Test 2', () => {
    const entry = [
        '2',
        '2 2 2',
        '1 0 1'
    ]
    expect(fn(entry)).toBe(0)
})
test('Test 3', () => {
    const entry = [
        '2',
        '2 0 2',
        '1 1 1'
    ]
    expect(fn(entry)).toBe(0)
})
test('Test 3', () => {
    const entry = [
        '2',
        '2 1 2 0 0 1',
        '1 0 1 4 1'
    ]
    expect(fn(entry)).toBe(0)
})