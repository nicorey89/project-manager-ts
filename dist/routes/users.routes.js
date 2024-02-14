"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const usersController_1 = require("../controllers/usersController");
/* /api/users */
userRouter.get('/', usersController_1.profile);
exports.default = userRouter;
