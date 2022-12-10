// тестирование
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = chai.expect;
const assert = require('assert')
chai.use(chaiHttp);



// подключаемые элементы
const app = require('../../server/app')
const { sequelize } = require('../../server/db');
const exercise = require('../../server/model/exercise');
// const deleteLastUserQuery = "delete from users order by user_id desc limit 1"



//------------------------------------- ТЕСТЫ --------------------------------------
describe("получить все тренировки пользователя", function () {

    it("типовой тест", function () {

        let url = "/api/all_trains"
        let user_id = 1
        let name = "user"
        let password = "password"
        let user = {
            user_id,
            name,
            password
        }
        chai.request(app)
            .post(url)
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.map(key => {
                    key.should.have.property("train_id")
                    key.should.have.property("name")
                    key.should.have.property("user_id")
                });
            });
    });

    it("пользователя не существует", function () {

        let url = "/api/all_trains"
        let user_id = 100
        let name = "user"
        let password = "password"
        let user = {
            user_id,
            name,
            password
        }

        chai.request(app)
            .post(url)
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
            });
    });
});


describe("удалить все упражнения из тренировки", function () {

    it("удалить тренировку", function () {
        let train_id = 41;
        let url = "/api/all_trains" + "?" + "train_id="+ train_id;

        chai.request(app)
        .get(url)
        .end((err, res) =>{
            res.should.have.status(200);
        })
    });

    it("удалить тренировку, которой не существует", function () {
        let train_id = 42;
        let url = "/api/all_trains" + "?" + "train_id="+ train_id;

        chai.request(app)
        .get(url)
        .end((err, res) =>{
            res.should.have.status(404);
        })
    });
});
