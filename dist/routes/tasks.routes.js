"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskRouter = (0, express_1.Router)();
const tasksController_1 = require("../controllers/tasksController");
/* /api/tasks */
taskRouter
    .route('/')
    .get(tasksController_1.list)
    .post(tasksController_1.store);
taskRouter
    .route('/:id')
    .get(tasksController_1.detail)
    .put(tasksController_1.update)
    .delete(tasksController_1.remove);
taskRouter
    .post('/change-state/:id', tasksController_1.changeState);
exports.default = taskRouter;
