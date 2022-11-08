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
}

module.exports = new ExerciseController();