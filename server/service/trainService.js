const { Op } = require('sequelize')
const db = require("../db");
const EntityExistsError = require('../error/EntityExistsError');
const NullError = require("../error/nullError");
const Train = db.Train
const Exercise = db.Exercise

class TrainService {
    async getAllTrains(user_id){
        console.log("get zapusk")
        console.log(user_id)
        console.log(user_id)
        const allTrains = await Train.findAll({
            where: {
                user_id: user_id
            }
        })

        console.log("boaba")
        console.log(allTrains)
        //console.log( JSON.stringify(allExercises, null, 2))
        return allTrains
    }

    
    async delete_all_excerices_from_train(train_id){
        console.log("bd")
        const allExercises = await Exercise.findAll()
        console.log(allExercises)

        const train = await Train.findAll({
            where: {
                train_id: train_id
            }
        }
        )

        for (var key in allExercises){
            train[0].removeExercise(allExercises[key])
        }

        const dlt = await Train.destroy({
            where: {
                train_id: train_id
            },
          })

        return train_id ///заглушка
    }
}

module.exports =  new TrainService();