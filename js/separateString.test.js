const separateString = require("./separateString");

test("This should separate string", () => {
  expect(separateString("release-patient-v7.3.1-dev(123).apk")).toEqual({
    name: "patient",
    version: "7.3.1",
  });
});
