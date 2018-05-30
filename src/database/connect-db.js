/**
 * 数据库连接公用
 */
const Aspect = require('./../util/aspect');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
let db = mongoose.connect('mongodb://127.0.0.1/test');

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
    Aspect.getAspect()
    Aspect.setAspect()
    console.log("数据库连接成功!");
});
