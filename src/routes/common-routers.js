const express = require('express');
const multer = require('multer');
const router = express.Router();
let schemas = require("./../schema/common-schemas");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

let upload = multer({storage: storage});

for (let schema in schemas) {

    let Schema = schemas[schema];
    let schemaName = Schema.modelName;

    /**
     * 添加数据
     */
    router.get('/add' + schemaName, function (req, res, next) {
//        console.log(Schema.modelName)
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
        res.send({
            message: 'success',
            state: 1
        });
    });

}

router.post('/upload', upload.single('file'), function (req, res, next) {
    res.send({
        message: 'success',
        state: 1
    });
});

module.exports = router;