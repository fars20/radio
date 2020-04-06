const { parseFCP } = require('./parser');

const collectFCP = (results,metric) => {
  metric.set({ timeing: 'FCP' }, parseFCP(results).value); // 1st version, Set value 100 with method set to GET and statusCode to 200
};

module.exports = {
  collectFCP
};
