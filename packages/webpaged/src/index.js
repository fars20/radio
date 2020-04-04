const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { collectBrowserSpeedMetrics }  = require('./metrics/browser-speed');

function launchChromeAndRunLighthouse(url, opts, config = null) {
  return chromeLauncher
    .launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr)
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects']
};

launchChromeAndRunLighthouse('https://example.com', opts).then(results => {
  collectBrowserSpeedMetrics(results);
});

const express = require('express');
const app = express();

const client = require('prom-client');

const collectDefaultMetrics = client.collectDefaultMetrics;
const Registry = client.Registry;
const register = new Registry();
collectDefaultMetrics({ register });

app.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

const PORT = 8080;

app.listen(PORT,() => {
  console.log(`webpaged running at port ${PORT}`)
});

