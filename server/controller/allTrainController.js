const allTrainService = require('../service/allTrainService')

class allTrainController{
    async getAllTrains(req, res){
        try{
            console.log("bibro")
            const allTrains = await allTrainService.getAllTrains()
            res.json(allTrains)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}

module.exports = new allTrainController();