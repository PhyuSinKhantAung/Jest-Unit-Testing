const reverseString = require("./reverseString");

test("reverseString function should exist", () => {
  expect(reverseString).toBeDefined();
});

test("hello world should be reversed into dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
