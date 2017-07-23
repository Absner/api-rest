"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
class GetAllUserService {
    init() {
        return this;
    }
    executeImpl() {
        let __this = this;
        return new Promise((resolve_, reject_) => {
            user_model_1.User.find()
                .exec()
                .then((data_) => resolve_(data_))
                .catch((err_) => reject_({ name: err_.name, code: 500, message: err_.message }));
        });
    }
}
exports.GetAllUserService = GetAllUserService;
//# sourceMappingURL=get-all.user.service.js.map