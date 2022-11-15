const trainService = require('../service/trainService')
const NullError = require('../error/nullError')

class TrainController{
    async getAllTrains(req, res){
        try{
            const allTrains = await trainService.getAllTrains()
            //console.log(JSON.stringify(allExercises, null, 2))
            res.json(allTrains)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}

module.exports = new TrainController();