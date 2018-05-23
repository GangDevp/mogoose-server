const express = require('express');
const router = express.Router();

let schemas = require("./../schema/common-schemas");

for (let schema in schemas) {

    let Schema = schemas[schema];
    let schemaName = Schema.modelName;

    /**
     * 添加数据
     */
    router.get('/add' + schemaName, function (req, res, next) {
        console.log(Schema.modelName)
        let param = req.query
        let schemaInstance = new Schema(param);
        schemaInstance.save(function (err) {
            if (err) {
                res.send({
                    message: 'error',
                    state: 0
                });
                console.log('error');
            } else {
                res.send({
                    message: 'success',
                    state: 1
                });
                console.log('success');
            }
        });
    });

    /**
     * 删除数据
     */
    router.get('/delete' + schemaName, function (req, res, next) {
        console.log(Schema.modelName)
        let param = req.query

    });

}

module.exports = router;