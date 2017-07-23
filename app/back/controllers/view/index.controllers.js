"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var router = express_1.Router({ mergeParams: true });
router.get('/', function (req, res, next) {
    res.send("Hola Mundos");
});
module.exports = router;
//# sourceMappingURL=index.controllers.js.map