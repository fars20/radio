
const collectTTFB = (results,metric) => {
  metric.set({ timeing: 'TTFB' }, 50); // 1st version, Set value 100 with method set to GET and statusCode to 200
};


module.exports = {
  collectTTFB
};
