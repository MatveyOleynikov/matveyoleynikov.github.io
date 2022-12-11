// тестирование
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = chai.expect;
const assert = require('assert')
chai.use(chaiHttp);

//функция 
const exerciseService = require("../../server/service/exerciseService")
const { use } = require('chai');
const exercise = require('../../server/model/exercise');

describe("получить список всех упражнений", async function(){

    it("типовой тест", async () =>{
        let exercises = await exerciseService.getAllExercises();
       // console.log(exercises[0].exercise_id)
        for (let i = 0; i < exercises.length; i++){
            assert.equal(true, "exercise_id" in exercises[i]);
            assert.equal(true, "name" in exercises[i]);
            assert.equal(true, "description" in exercises[i]);
            assert.equal(true, "list_id" in exercises[i]);
            assert.equal(true, "time" in exercises[i]);
            assert.equal(true, "url" in exercises[i]);
        }
    });
});


describe("получить список всех упражнений по train_id", async function(){

    it("типовой тест", async () =>{
        let exercises = await exerciseService.getAllExercisesByTrainId(9);
        for (let i = 0; i < exercises.length; i++){
            assert.equal(true, "exercise_id" in exercises[i]);
            assert.equal(true, "name" in exercises[i]);
            assert.equal(true, "description" in exercises[i]);
            assert.equal(true, "list_id" in exercises[i]);
            assert.equal(true, "time" in exercises[i]);
            assert.equal(true, "url" in exercises[i]);
        }
    });
});


describe("добавить тренировку", async function(){

    it("типовой тест", async () =>{
        let user_id = 1;
        let exercises_list = [1, 2, 3];

        let res = await exerciseService.addTrain(exercises_list, user_id);
        assert.equal(true, res);
    });
});