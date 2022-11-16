const { Op } = require('sequelize')
const db = require("../db");
const EntityExistsError = require('../error/EntityExistsError');
const NullError = require("../error/nullError");
const Exercise = db.Exercise
const Train = db.Train
const TrainExercise = db.Train
const TrainToExercise = db.TrainToExercise

class ExerciseService {
    async getAllExercises(){
        const allExercises = await Exercise.findAll()
       
        console.log( JSON.stringify(allExercises, null, 2))
        return allExercises
    }

    async addTrain(lists_exercises, my_user_id) {
        console.log("olololo");
        console.log(lists_exercises);

        console.log(my_user_id)
        const train = await Train.create({name: 'trenirovka glaz', user_id : my_user_id})

        // const train_exercise = TrainToExercise.create({train_id: 5, exercise_id : 1}).then(rs => {
        //     console.log(rs);
        // })
    
        for (var key in lists_exercises){
            console.log("dorime")
            console.log(lists_exercises[key])
            const exercise = await Exercise.findOne({
                where: {
                    exercise_id: lists_exercises[key]
                }
            }
            )
        
            console.log(JSON.stringify(train, null, 2))
            console.log(JSON.stringify(exercise, null, 2))

            train.addExercise(exercise);
        }
        //const train_exercises = TrainExercise.create({train_id: train.dataValues.trains_id, exercise_id : 1}).then(rs => {
        //    console.log(rs);
        //})
        
        return true
    }
}

const x = new ExerciseService();
x.getAllExercises();

module.exports =  new ExerciseService();