const {Router} = require('express');
const ExerciseController = require('../controller/exerciseController');

const ExerciseRouter = new Router();

ExerciseRouter.get('/exercises', ExerciseController.getAllExercises);
ExerciseRouter.post('/exercises', ExerciseController.addTrain);

module.exports = ExerciseRouter;