const express = require('express');

const app = express();

const server = app.listen(3000, function() {
  let port = server.address().port;
  console.log('目前監聽的 PORT :', port);
});