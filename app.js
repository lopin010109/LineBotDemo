const express = require('express');
const { verificationSignature } = require('./src/verification');
const { bot } = require('./src/botActions');

const app = express();

// bot.parser() 是 LINE Bot 的傳過來的資料，以及 JSON 解析
const linebotParser = bot.parser();

app.use(linebotParser);

// 建立 webhook 並驗證 signature
app.post('/webhook', function(req, res) {
  verificationSignature(req, res);
});

// process.env.PORT 可以拿到 Heruko 給的 port
const server = app.listen(process.env.PORT || 3030, function() {
    let port = server.address().port;
    console.log('目前監聽的 PORT :', port);
});
