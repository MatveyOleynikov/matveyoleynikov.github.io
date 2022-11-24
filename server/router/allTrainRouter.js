const {Router} = require('express');
const allTrainController = require('../controller/allTrainController');

const allTrainRouter = new Router();

allTrainRouter.get('/generate_all_trains', allTrainController.getAllTrains);

module.exports = allTrainRouter;