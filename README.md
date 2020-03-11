# LineBotDemo
紀錄 LineBot + Heroku + NodeJs + Docker + Mysql


# LineBot
拿到三個參數
``` 
  channelId: process.env.LINE_BOT_CHANNEL_ID,
  channelSecret: process.env.LINE_BOT_CHANNEL_SECRET,
  channelAccessToken: process.env.LINE_BOT_CHANNEL_ACCESS_TOKEN,
```
部署到 Heroku 上面的專案，使用 process.env.參數名稱
會拿到你設定再 Heroku 上面的環境變數，省去另外寫config去引入

# Heroku
在專案建立時為了要同時可以操作github上面專案，
請先讓你 Heroku 空間和 github 做連結，之後並且在本地端 terminal 專案下，
輸入 heroku git:remote -a Heroku上面的專案名稱來建立連結
若你有多台電腦需要操作，請都在本地端先clone你github上面到本機後，在與 Heroku 建立連結
但是當你推了專案上去 Heroku 之後，你本地端就無法再做連結，只能使用clone方式使用

# NodeJs 
Heroku 提供了 nodeJs server 服務，因此直接使用 nodeJs 來啟用我的服務

# Docker
在這邊使用 docker 開啟 mysql 來當作測試使用的 database
docker run -itd --name my-db -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7

# ngrok 
使用 ngrok 來產生 local 端臨時 domain，來做 linebot webhook 測試，
省去每次異動就得從新部署上 Heroku 的麻煩


# Mysql => clearDB 
Heroku 提供了DB空間使用，我選擇 clearDB 來使用
輸入 heroku config | grep CLEARDB_DATABASE_URL 拿到 DB 資訊
mysql://b7ab37b74f8040:d1174f4d@us-cdbr-iron-east-04.cleardb.net/heroku_0cb64da54a6f3cd?reconnect=true

Heroku 官方使用文件 
https://devcenter.heroku.com/articles/cleardb#using-cleardb-with-python-django