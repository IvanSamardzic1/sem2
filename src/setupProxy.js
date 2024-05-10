const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/idissuer-api',
    createProxyMiddleware({
      target: 'https://idissuer-api.akd.hr',
      changeOrigin: true,
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.idissuer.si',
      changeOrigin: true,
    })
  );
};
