const subtract = require("./subtract");

test("Properly subtract two numbers", () => {
  expect(subtract(2, 3)).toBe(-1);
});

function helper() {
  console.log("testing");
}
