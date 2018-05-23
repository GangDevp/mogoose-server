
require('./../database/connect-db');//引入连接数据库的工具
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let schemasConfig = require('./../config/schemas');//获取用户自定义的schema配置文件

let schemas = schemasConfig.schemas
for (let key in schemas) {
    let schema = new Schema(schemas[key], {
        versionKey: false
    });
    exports[key] = mongoose.model(key, schema);
}

