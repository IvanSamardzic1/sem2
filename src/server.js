const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors'); // Dodaj ovu liniju

const app = express();

app.use(cors());

// Postavite proxy za "/infostat" na "https://idissuer-api.akd.hr/infostat"
app.use('/infostat', createProxyMiddleware({ target: 'https://idissuer-api.akd.hr/', changeOrigin: true }));

// Postavite proxy za "/ver" na "https://idissuer-api.akd.hr/ver"
app.use('/ver', createProxyMiddleware({ target: 'https://idissuer-api.akd.hr/', changeOrigin: true }));


app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});
