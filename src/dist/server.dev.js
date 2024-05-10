"use strict";

var express = require('express');

var _require = require('http-proxy-middleware'),
    createProxyMiddleware = _require.createProxyMiddleware;

var cors = require('cors'); // Dodaj ovu liniju


var app = express();
app.use(cors()); // Postavite proxy za "/infostat" na "https://idissuer-api.akd.hr/infostat"

app.use('/infostat', createProxyMiddleware({
  target: 'https://idissuer-api.akd.hr/',
  changeOrigin: true
})); // Postavite proxy za "/ver" na "https://idissuer-api.akd.hr/ver"

app.use('/ver', createProxyMiddleware({
  target: 'https://idissuer-api.akd.hr/',
  changeOrigin: true
}));
app.listen(3001, function () {
  console.log('Proxy server running on port 3001');
});
//# sourceMappingURL=server.dev.js.map
