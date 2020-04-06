const parseFCP = (results) => {
  return {
    name: 'TTI',
    value: results.audits['first-meaningful-paint']['numericValue']
  };
};

module.exports = {
  parseFCP
};
