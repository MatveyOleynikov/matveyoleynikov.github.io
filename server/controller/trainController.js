const trainService = require('../service/trainService')
const NullError = require('../error/nullError')

class TrainController{
    async getAllTrains(req, res){
        try{
            // console.log("pgpg")
            // console.log(req.body)
            // console.log(req.body.name)
            const allTrains = await trainService.getAllTrains(req.body.user_id)
            //console.log(JSON.stringify(allTrains, null, 2))
            res.json(allTrains)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }

    
    async delete_all_excerices_from_train(req, res){
        try{
            console.log("train_id")
            console.log(req.query.train_id)
            const allTrains = await trainService.delete_all_excerices_from_train(req.query.train_id)
            //console.log(JSON.stringify(allTrains, null, 2))
            res.json(allTrains)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}

module.exports = new TrainController();