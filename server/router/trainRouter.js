const {Router} = require('express');
const TrainController = require('../controller/trainController');

const TrainRouter = new Router();

TrainRouter.post('/all_trains', TrainController.getAllTrains);
TrainRouter.get("/all_trains", TrainController.delete_all_excerices_from_train);

module.exports = TrainRouter;