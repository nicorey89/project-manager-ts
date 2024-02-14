"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
/* GET home page. */
indexRouter.get('/', function (req, res, next) {
    res.status(200).json({
        ok: true,
        msg: "Welcome!!"
    });
});
exports.default = indexRouter;
