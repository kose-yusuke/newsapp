//サーバーはexpress
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//静的ファイルの利用
app.use(express.static('public'))

//EJSテンプレートエンジンの利用

app.set('views', './src/views')
app.set('view engine', 'ejs')

//POSTデータの受け取り(body-parser)
app.use(express.urlencoded({extended: true})); 

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/article', newsRouter)


app.listen(3000, () => console.log('listening on port ' + 3000));