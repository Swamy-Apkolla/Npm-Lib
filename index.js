var Chart = require("chart.js");

module.exports.CreateLineChart = (context, config) => {
  console.log("from neu-chartjs-lib package");
  new Chart(context, config);
};

module.exports.Chart = Chart;
