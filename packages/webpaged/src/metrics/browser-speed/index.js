const { collectTTI } = require('./tti/collector');
const { collectTTFB } = require('./ttfb/collector');
const { collectFMP } = require('./fmp/collector');
const { collectFCP } = require('./fcp/collector');

 const client = require('prom-client');
//
let gauge = null;

const collectBrowserSpeedMetrics = ({results,client}) => {
  if(gauge === null) {
    gauge = new client.Gauge({
      name: 'browser_speed_lab',
      help: 'lab browser metrics',
      labelNames: ['timeing'],
    });
  }
  collectTTI(results,gauge);
  collectTTFB(results,gauge);
  collectFMP(results,gauge);
  collectFCP(results,gauge);
};


module.exports = {
  collectBrowserSpeedMetrics
};
