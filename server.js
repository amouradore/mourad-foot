const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Activer CORS
app.use(cors());

// Configuration du proxy
const proxyOptions = {
  target: 'http://mo3ad.xyz:80',
  changeOrigin: true,
  pathRewrite: {
    '^/stream/': '/' // retire '/stream/' de l'URL
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
  onError: function(err, req, res) {
    console.log('Proxy Error:', err);
    res.status(500).send('Proxy Error');
  }
};

// Route pour le proxy
app.use('/stream', createProxyMiddleware(proxyOptions));

// Log des requêtes
app.use((req, res, next) => {
  console.log('Requête reçue:', req.method, req.url);
  next();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
}); 