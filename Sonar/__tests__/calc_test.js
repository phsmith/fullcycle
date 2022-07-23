const {sum, sub, multi, div} = require('../src/calc.js');

test("sum 10 + 10 to be equal 20", () => {
    expect(sum(10, 10)).toBe(20);
});

test("sub 10 - 10 to be equal 0", () => {
    expect(sub(10, 10)).toBe(0);
});

test("multi 10 * 10 to be equal 100", () => {
    expect(multi(10, 10)).toBe(100);
});
