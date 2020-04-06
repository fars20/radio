
const collectFCP = (results,metric) => {
  metric.set({ timeing: 'FCP' }, 100); // 1st version, Set value 100 with method set to GET and statusCode to 200
};

module.exports = {
  collectFCP
};
