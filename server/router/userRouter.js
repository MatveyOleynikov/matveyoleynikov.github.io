const {Router} = require('express');
const userController = require('../controller/userController');
const UserController = require('../controller/userController');
const authMiddlewaree = require('../middlewaree/authMiddlewaree');

const userRouter = new Router();


userRouter.get('/users', UserController.login);
userRouter.post('/users', UserController.registration);
userRouter.get("/users/user", authMiddlewaree, userController.getUser);
userRouter.get('/users/changeLogin', UserController.changeLogin);

module.exports = userRouter;