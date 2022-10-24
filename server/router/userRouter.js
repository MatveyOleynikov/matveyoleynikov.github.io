const {Router} = require('express');
const UserController = require('../controller/userController')

const userRouter = new Router();

userRouter.get('/users', UserController.getByNameAndPassword);
userRouter.post('/users', UserController.registration)

module.exports = userRouter;