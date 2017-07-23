"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_config_1 = require("../config/mongoose.config");
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    firts_name: String,
    last_name: String,
});
schema.index({ "firts_name": "text" });
exports.User = mongoose_config_1.mongoose.model("User", schema);
//# sourceMappingURL=user.model.js.map