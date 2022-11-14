const exerciseService = require('../service/exerciseService')
const NullError = require('../error/nullError')

class ExerciseController{
    async getAllExercises(req, res){
        try{
            const allExercises = await exerciseService.getAllExercises()
            console.log(JSON.stringify(allExercises, null, 2))
            res.json(allExercises)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }

    
    async addTrain(req, res){
        try{
            console.log("body")
            console.log(req.body)
            const train_added = await exerciseService.addTrain(req.body)
            res.json(train_added)
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }
}

module.exports = new ExerciseController();