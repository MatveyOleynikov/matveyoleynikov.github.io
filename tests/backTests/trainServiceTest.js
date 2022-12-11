// тестирование
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = chai.expect;
const assert = require('assert')
chai.use(chaiHttp);

//функция 
const trainService = require("../../server/service/trainService")
const { use } = require('chai');
const NullError = require('../../server/error/nullError');

describe("получить все тренировки пользователя", async function () {
    it("типовой тест", async () => {
        let user_id = 1;
        trains = await trainService.getAllTrains(user_id);

        for (let i = 0; i < trains.length; i++) {
            assert.equal(true, 'train_id' in trains[i]);
            assert.equal(true, 'name' in trains[i]);
            assert.equal(true, 'user_id' in trains[i]);
        }
    });
});

describe("удалить тренировку по train_id", async function () {
    it("типовой тест", async () => {
        train_id = 49;
        let x = await trainService.delete_all_excerices_from_train(train_id);
        assert.equal(train_id, x);
    });
});