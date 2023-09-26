// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

const functions = require("./functions");

test("1 + 1 must be 2", () => {
  expect(functions.add(1, 1)).toBe(2);
});

test("");
