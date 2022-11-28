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

    // async autoNumberOfUserTrain(my_user_id) {
    //     console.log('ttt')
    //     const result = await Train.findAll(
    //          {   
    //              include: User,
    //              where: {
    //                  user_id : my_user_id
    //              }
    //          }
    //      )
            
    //      console.log('the best girl')
    //      return result.length;
    //  }

    async addTrain(lists_exercises, my_user_id) {
        console.log("olololo");
        console.log(lists_exercises);

        console.log(my_user_id)
        // const autoNumber = await autoNumberOfUserTrain(my_user_id);
        // console.log('user fy==fsddfhnsda')
        // console.log(autoNumber)
        //const name = 'Тренировка глаз ' + autoNumber;
        //console.log(name)
        const train = await Train.create({name: 'Тренировка глаз' , user_id : my_user_id})

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

    async getAllExercisesByTrainId(train_id){
        
        if (train_id == null){
            throw new NullError("train_id is null");
        }

        
        if (typeof train_id != "number"){
            throw new Error("id is not number");
        }

        const train = await Train.findOne(
            {
                where : {
                    train_id : train_id
                }
            }
        );
        const exercises = await train.getExercises();
        console.log("true true true");
        console.log(JSON.stringify(exercises, null, 2));

        return exercises;
    }
}

// const x = new ExerciseService();
// // x.getAllExercises();

module.exports =  new ExerciseService();