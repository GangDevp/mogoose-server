/**
 * 数据库连接公用
 */
const aop = require('./../util/aspect');
const dbconfig = require('./../config/config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

let dbPath = dbconfig.dbConfig.dbPath;
let db = mongoose.connect(dbPath);

let connectSuccessed = function () {
    aop.logger('db server start...');
}.after(function () {
    console.log('db server connected ！');
}).before(function () {
    console.log('db sever address：' + dbPath);
});

let connectFailed = function (error) {
    aop.logger('db connect failed, by ' + error);
}.after(function () {
    console.log('db server failed.');
});

db.connection.on('error', function (error) {
    connectFailed(error);
});

db.connection.on('open', function () {
    connectSuccessed();
});
