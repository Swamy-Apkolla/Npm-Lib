var add = require("./addition.js");
exports.Numbers = function() {
  console.log("Node Numbers function");
};

exports.Sum = function(a, b) {
  return add.AddNumber(a, b);
};
