const {Router} = require('express');
const TrainController = require('../controller/trainController');

const TrainRouter = new Router();

TrainRouter.get('/all_trains', TrainController.getAllTrains);

module.exports = TrainRouter;