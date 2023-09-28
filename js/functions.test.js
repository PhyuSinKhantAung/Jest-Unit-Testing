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

test("It should be null", () => {
  expect(functions.null()).toBeNull();
});

test("It should be falsy value", () => {
  expect(functions.checkValue(1)).not.toBeFalsy();
});

test("It should be Phyu Sin User object", () => {
  expect(functions.createUser()).toEqual({
    firstname: "Phyu",
    lastname: "Sin",
  });
});

test("It should be under 1600", () => {
  const num1 = 700;
  const num2 = 800;
  expect(num1 + num2).toBeLessThan(1600);
});

test("There is no I in team word", () => {
  expect("team").not.toMatch(/I/);
});

test("John should be in usernames", () => {
  const usernames = ["John", "Derek"];
  expect(usernames).toContain("John");
});

test("This user name should be Leanne Graham", () => {
  // expect.assertions(1);
  return functions.fetchUser().then((data) => {
    console.log(data);
    expect(data.name).toEqual("Leanne Graham");
  });
});
