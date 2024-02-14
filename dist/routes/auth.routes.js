"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter = (0, express_1.Router)();
const authController_1 = require("../controllers/authController");
/* /api/auth */
authRouter
    .post('/register', authController_1.register)
    .post('/login', authController_1.login)
    .get('/checked', authController_1.checked)
    .post('/send-token', authController_1.sendToken)
    .route('/reset-password')
    .get(authController_1.verifyToken)
    .post(authController_1.changePassword);
exports.default = authRouter;
