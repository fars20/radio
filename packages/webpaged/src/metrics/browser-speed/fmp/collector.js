const { parseFMP } = require('./parser');

const collectFMP = (results,metric) => {
  metric.set({ timeing: 'fmp' }, parseFMP(results).value); // 1st version, Set value 100 with method set to GET and statusCode to 200
};

module.exports = {
  collectFMP
};
