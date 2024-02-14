import { Router } from 'express';
import { changePassword, checked, login, register, sendToken, verifyToken } from '../controllers/authController';
import { taskChangeState, taskDetail, taskRemove, taskStore, taskUpdate, tasksList } from '../controllers/tasksController';
import { profile } from '../controllers/usersController';
import { collaboratorAdd, collaboratorRemove, proejectDetail, projectsList, projectRemove, projectStore, projectUpdate } from '../controllers/projectsController';
import { checkAuth } from '../middlewares';
const router = Router();

/* AUTH */
router
  .post('/register', register)
  .post('/login', login)
  .get('/checked', checked)
  .post('/send-token', sendToken)
  .route('/reset-password')
  .get(verifyToken)
  .post(changePassword);
  
/* PROYECTOS */
router
  .route('/projects')
  .get(checkAuth, projectsList)
  .post(checkAuth, projectStore)
router
  .route('/projects/:id')
  .get(checkAuth,proejectDetail)
  .put(checkAuth,projectUpdate)
  .delete(checkAuth,projectRemove)
router
  .get('/collaborator', collaboratorAdd)
  .delete('/collaborator', collaboratorRemove)

/* TAREAS */
router
  .route('/tasks')
  .get(tasksList)
  .post(taskStore)
router
  .route('/tasks/:id')
    .get(taskDetail)
    .put(taskUpdate)
    .delete(taskRemove)
router
    .post('/tast/:id/change-state', taskChangeState)

/* USUARIOS */
router
  .get('/', profile);


export default router;
