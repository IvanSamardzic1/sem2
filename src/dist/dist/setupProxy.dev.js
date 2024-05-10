"use strict";

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use('/idissuer-api', createProxyMiddleware({
    target: 'https://idissuer-api.akd.hr',
    changeOrigin: true
  }));
  app.use('/api', createProxyMiddleware({
    target: 'https://api.idissuer.si',
    changeOrigin: true
  }));
};
//# sourceMappingURL=setupProxy.dev.js.map
