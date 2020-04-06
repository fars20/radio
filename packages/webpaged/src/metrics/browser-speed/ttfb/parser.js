const parseTTFB = (results) => {
  return {
    name: 'TTI',
    value: results.audits['time-to-first-byte']['numericValue']
  };
};

module.exports = {
  parseTTFB
};
