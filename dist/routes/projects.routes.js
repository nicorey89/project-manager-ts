"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectRouter = (0, express_1.Router)();
const projectsController_1 = require("../controllers/projectsController");
/* /api/projects */
projectRouter
    .route('/')
    .get(projectsController_1.list)
    .post(projectsController_1.store);
projectRouter
    .route('/:id')
    .get(projectsController_1.detail)
    .put(projectsController_1.update)
    .delete(projectsController_1.remove);
projectRouter
    .get('/collaborator/add', projectsController_1.addCollaborator)
    .delete('/collaborator/remove', projectsController_1.removeCollaborator);
exports.default = projectRouter;
