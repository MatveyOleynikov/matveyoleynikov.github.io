const exerciseService = require('../service/exerciseService')
const NullError = require('../error/nullError')

class ExerciseController{
    async getAllExercises(req, res){
        try{
            const allExercises = await exerciseService.getAllExercises()
            // console.log(JSON.stringify(allExercises, null, 2))
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
            console.log(req)
            const user_id = req.body[req.body.length - 1]
        //    console.log("bebrastan")
          //  console.log(user_id)
            req.body.pop()
            //console.log(req.body)
            const train_added = await exerciseService.addTrain(req.body, user_id)
            console.log(train_added)
            res.json(train_added)
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }

    async getAllExercisesByTrain(req, res){
        try{
            
            const train_id_string = req.params.train_id;
            const train_id = parseInt(train_id_string);
            //console.log(train_id_string)
            //console.log(train_id)
            const exercises = await exerciseService.getAllExercisesByTrainId(train_id);
            res.json(exercises);
        }
        catch(e){
            res.status(400).json(e.message);
        }
        
    }

    async getAllExercisesByExerciseId(req, res){

        try{
        console.log(req.body)
        const exercisesIdList = req.body
        console.log(exercisesIdList)
        const exercises = await exerciseService.getExercisesByExercisesId(exercisesIdList);
        res.json(exercises)
        }
        catch(e){
            res.status(400).json(e.message);
        }

    }   
    
}

module.exports = new ExerciseController();