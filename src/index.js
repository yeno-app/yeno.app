const express = require("express"),
      app = express(),
      PORT = process.env.PORT || 8080,
      serveStatic = require('serve-static'),
      path = require("path");

app.use(serveStatic(path.join(__dirname, 'public'), {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}));

app.listen(PORT, () => console.log("App Started up!"));

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}
    