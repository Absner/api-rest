"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../models/user.model");
class AddUserService {
    init(user_) {
        this.User = user_;
        console.log("recibiendo data: ", this.User);
        return this;
    }
    executeImpl() {
        let __this = this;
        return new Promise((resolve_, reject_) => {
            user_model_1.User.create(__this.User).then((data_) => {
                resolve_(data_);
            })
                .catch((error) => {
                reject_({
                    code: 400,
                    message: error
                });
            });
        });
    }
}
exports.AddUserService = AddUserService;
//# sourceMappingURL=add.user.service.js.map