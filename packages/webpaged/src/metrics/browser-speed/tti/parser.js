const parseTTI = (results) => {
  return {
    name: 'TTI',
    value: results.audits['interactive']['numericValue']
  };
};

module.exports = {
  parseTTI
};
