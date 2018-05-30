/**
 * 数据库连接公用
 */
const aop = require('./../util/aspect');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
let db = mongoose.connect('mongodb://127.0.0.1/test');

let dbConnectSuccessed = function () {
    aop.logger('数据库服务开启中...');
};

let dbConnectFailed = function (error) {
    aop.logger('数据库服务开启中...');
    aop.logger('数据库服务开启失败：' + error);
};


dbConnectSuccessed = dbConnectSuccessed.before(function () {
    console.log('数据库连接地址：mongodb://127.0.0.1/test');
}).after(function () {
    console.log('数据连接成功！');
});

dbConnectFailed = dbConnectFailed.before(function () {
    console.log('数据库连接地址：mongodb://127.0.0.1/test');
}).after(function () {
    console.log('数据连接失败！');
});

db.connection.on('error', function (error) {
    dbConnectFailed(error);
});

db.connection.on('open', function () {
    dbConnectSuccessed();
});
