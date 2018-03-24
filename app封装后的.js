const express = require("express"); //引入express 模块
const bodyParser = require('body-parser')//引入body-parser模块 方便拿到请求体数据 
const app = express(); //创建一个服务

app.engine('html', require('express-art-template'))//为服务配置读写html文件模版

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())//配置boayparser 

const router = require("./router");

app.use(router);


app.listen("3000", err => {
    console.log("running");
})