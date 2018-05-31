
const aop = require('./../util/aop');
const dbconfig = require('./../config/config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);

let dbPath = dbconfig.dbConfig.dbPath;
let db = mongoose.connect(dbPath);

let connectSuccessed = function () {
    aop.logger('log', 'db server startup.');
}.after(function () {
    aop.logger('log', 'db server connected.');
}).before(function () {
    aop.logger('log', 'db sever address：' + dbPath);
});

let connectFailed = function (error) {
    aop.logger('trace', 'db connect failed, by ' + error);
}.before(function () {
    aop.logger('error', 'db server failed.');
});

db.connection.on('error', function (error) {
    connectFailed(error);
});

db.connection.on('open', function () {
    connectSuccessed();
});
