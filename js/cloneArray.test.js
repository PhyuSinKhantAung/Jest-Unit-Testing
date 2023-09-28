const cloneArray = require("./cloneArray");

test("Properly clone array", () => {
  // toBe is restricted. Must be really equal.
  // expect(cloneArray([1, 2, 3])).toBe([1, 2, 3]);
  expect(cloneArray([1, 2, 3])).toEqual([1, 2, 3]);
});
