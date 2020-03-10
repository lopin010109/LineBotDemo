const lineBot = require('linebot');

const bot = lineBot({
  // 參數值皆在 Heroku 上設定
  channelId: process.env.LINE_BOT_CHANNEL_ID,
  channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN,
  verify: true,
});

bot.on('message', function (event) {
  const receiveText = event.message.text;
  console.log('接受訊息', receiveText);

  // 回覆訊息 123
  sendText(receiveText);

  function sendText(replyText) {
    event.reply({
      type: 'text',
      text: replyText,
    })
    .then((res) => console.log('Success 成功接收訊息:', res))
    .catch((err) => console.log('Error 回覆訊息之錯誤:', err));
  };
});

module.exports = { bot };
