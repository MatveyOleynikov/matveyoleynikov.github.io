const { Op } = require('sequelize')
const db = require("../db");
const EntityExistsError = require('../error/EntityExistsError');
const NullError = require("../error/nullError");
const Train = db.Train

class TrainService {
    async getAllTrains(){
        const allTrains = await Train.findAll()
        console.log("boaba")
        //console.log( JSON.stringify(allExercises, null, 2))
        return allTrains
    }
}

const x = new TrainService();
x.getAllTrains();

module.exports =  new TrainService();