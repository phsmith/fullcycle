const calc = require('../src/calc.js');

test("sum 10 + 10 to be equal 20", () => {
    expect(calc.sum(10, 10)).toBe(20);
});

test("sub 10 - 10 to be equal 0", () => {
    expect(calc.sub(10, 10)).toBe(0);
});

test("multi 10 * 10 to be equal 100", () => {
    expect(calc.multi(10, 10)).toBe(100);
});
