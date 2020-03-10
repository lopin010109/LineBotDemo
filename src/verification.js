const crypto = require('crypto');

// Channel secret string 此參數設定於 Heroku 上面
const channelSecret = process.env.LINE_BOT_CHANNEL_SECRET; 


// 該驗證方式為line官方提供
function compileSignature(event) {
  // Request body string
  // Compare X-Line-Signature request header and the signature
  try {
    const body = new Buffer(JSON.stringify(event.body), 'utf8');
    const signature = crypto.createHmac('SHA256', channelSecret).update(body).digest('base64');
    return signature;
  } catch (err) {
    console.log('Error: compileSignature faield', err)
  }  
};

function verificationSignature(req, res) {
  if (compileSignature(req) !== req.header('x-Line-Signature')) {
    res.sendStatus(403);
    console.log('header 驗證失敗');
    return res.send(error);
  }
  // 必須回傳 200 否則 line 無法成功驗證
  res.sendStatus(200);
  console.log('header 驗證成功');
};

module.exports = { verificationSignature };