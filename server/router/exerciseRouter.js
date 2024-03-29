const {Router} = require('express');
const ExerciseController = require('../controller/exerciseController');

const ExerciseRouter = new Router();

ExerciseRouter.get('/exercises', ExerciseController.getAllExercises);
ExerciseRouter.post('/exercises', ExerciseController.addTrain);
ExerciseRouter.get('/exercises/:train_id', ExerciseController.getAllExercisesByTrain)
ExerciseRouter.post('/exercises/exercisesById', ExerciseController.getAllExercisesByExerciseId)

module.exports = ExerciseRouter;