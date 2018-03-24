const fs = require("fs")
const express = require("express")


exports.showIndex = (ret, res) => { //创建一个标识为 / 的请求

    fs.readFile("./data.json", (err, data) => {
        if (err) {
            throw err;
        }

        data = data.toString();
        data = JSON.parse(data);

        res.render("./index.html", { //将index.html 文件内容读取出来，并把从文件中得到的json数据按照模版填充到页面中
            posts: data.posts
        });
    })

}


exports.showPublish = (ret, res) => { //创建一个标识为 /publish 的请求 指向./publish.html
    res.render("./publish.html");
}
exports.publish = (ret, res) => {

    const body = ret.body //得到表单提交的 表单对象
    body.time = '2018-3-22 16:23:27'

    fs.readFile("./data.json", (err, data) => {
        if (err) {
            throw err;
        }

        data = data.toString();
        data = JSON.parse(data);

        data.posts.unshift(body);

        data = JSON.stringify(data);

        fs.writeFile("./data.json", data, err => {
            if (err) {
                throw err;
            }
            //重定向
            res.redirect("/");
        });

    })

}