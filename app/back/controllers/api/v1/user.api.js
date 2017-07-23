"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_all_user_service_1 = require("../../../services/get-all.user.service");
const add_user_service_1 = require("../../../services/add.user.service");
var router = express_1.Router();
router.get('/', function (req, res, next) {
    let _action = new get_all_user_service_1.GetAllUserService();
    _action.init()
        .executeImpl()
        .then((data_) => {
        res.status(200)
            .json({
            code: 200,
            message: 'data extraida',
            content: data_
        });
        return data_;
    })
        .catch((error) => {
        res.status(400)
            .json({
            code: 400,
            message: 'nada bien',
            content: error
        });
    });
});
router.post('/', function (req, res, next) {
    let user_data = req.body;
    let _action = new add_user_service_1.AddUserService();
    _action.init(user_data);
    _action.executeImpl()
        .then((data_) => {
        res.status(200)
            .json({
            code: 200,
            message: 'data almacenada',
            content: data_
        });
        return data_;
    })
        .catch((error) => {
        res.status(400)
            .json({
            code: 400,
            message: 'error al guardar',
            content: ''
        });
    });
});
module.exports = router;
//# sourceMappingURL=user.api.js.map