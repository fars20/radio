
const collectTTI = (results,metric) => {
  metric.set({ method: 'GET', statusCode: '200' }, 100); // 1st version, Set value 100 with method set to GET and statusCode to 200
};

module.exports = {
  collectTTI
};
