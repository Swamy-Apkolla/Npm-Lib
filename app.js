var add = require("./addition.js");
exports.Numbers = function(a, b) {
  console.log("Node Numbers");
  this.Add = function(a, b) {
    add.AddNumber(a, b);
  };
};
