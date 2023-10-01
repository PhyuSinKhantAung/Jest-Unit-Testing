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

// promise
test("This user name should be Leanne Graham", () => {
  // if we dont use expect.assertion and return async function, it will just pass tho it passes or not
  // expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// async await
test("This user name should be Leanne Graham", async () => {
  // expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
