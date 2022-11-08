const { Op } = require('sequelize')
const db = require("../db");
const EntityExistsError = require('../error/EntityExistsError');
const NullError = require("../error/nullError");
const Exercise = db.Exercise

class ExerciseService {
    async getAllExercises(){
        const allExercises = await Exercise.findAll()
       
        console.log( JSON.stringify(allExercises, null, 2))
        return allExercises
    }
}

const x = new ExerciseService();
x.getAllExercises();

module.exports =  new ExerciseService();