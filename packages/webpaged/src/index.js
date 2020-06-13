const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { collectBrowserSpeedMetrics }  = require('./metrics/browser-speed');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr)
    }).catch( error => {

    });
  });
}

const opts = {
  chromeFlags: ['--headless','--no-sandbox']
};
const client = require('prom-client');

setInterval(()=>{
  launchChromeAndRunLighthouse('https://example.com', opts).then(results => {
    collectBrowserSpeedMetrics({results,client});
  }).catch( error => {
    
  });
},1000);

const express = require('express');
const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({ register: client.register });

app.get('/metrics', (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(client.register.metrics());
});

const PORT = 5050;

app.listen(PORT,'0.0.0.0',() => {
  console.log(`webpaged running at port ${PORT}`)
});
