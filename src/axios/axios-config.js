import axios from 'axios/index';
const http = require('http');
const https = require('https');

module.exports = axios.create({
  timeout: 60000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true })
});
