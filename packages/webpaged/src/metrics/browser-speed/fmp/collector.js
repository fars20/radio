
const collectFMP = (results,metric) => {
  metric.set({ timeing: 'fmp' }, 200); // 1st version, Set value 100 with method set to GET and statusCode to 200
};

module.exports = {
  collectFMP
};
