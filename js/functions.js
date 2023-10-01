const axios = require("axios");
const functions = {
  add: (num1, num2) => num1 + num2,

  null: () => null,

  checkValue: (x) => x,

  createUser: () => {
    const user = { firstname: "Phyu" };
    user["lastname"] = "Sin";
    // this is mutating user and return new array
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        return res.data;
      })
      .catch((err) => "error"),
};

module.exports = functions;
