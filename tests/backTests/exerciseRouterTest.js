process.env.NODE_ENV = 'dev';
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


//-------------------------------------- ТЕСТЫ -------------------------------------------------


describe("получение всех пользователей", function () {

    let token = ''

    before((done) => {
        const login = "user";
        const password = "password";
        let url = "/api/users" + "?" + "name=" + login + "&" + "password=" + password

        chai.request(app)
            .get(url)
            .end((err, res) => {
                token = res.body
                done()
            });
    }
    );

    it("типовой тест", (done) => {

        let url = "/api/exercises"
        chai.request(app)
            .get(url)
            .set({ Authorization: `Bearer ${token}` })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.map(key => {
                    key.should.have.property("exercise_id")
                    key.should.have.property("name")
                    key.should.have.property("description")
                    key.should.have.property("list_id")
                    key.should.have.property("url")
                    key.should.have.property("time")
                });
            })

        done();
    });
});


describe("добавить упражнение в тренировку", function () {
    it("добавление 1 упражнения", () => {
        let url = "/api/exercises"
        let exercise_list = [1, 1]

        chai.request(app)
            .post(url)
            .send(exercise_list)
            .end((err, res) => {
                res.should.have.status(200);
            }
            )
    })

    it("добавление  2 упражнений", () => {
        let url = "/api/exercises"
        let exercise_list = [1, 2, 3, 1]

        chai.request(app)
            .post(url)
            .send(exercise_list)
            .end((err, res) => {
                res.should.have.status(200);
            }
            )
    })
});


describe("добавить упражнение в тренировку", function () {
    it("типовой тест", () => {
        let train_id = 40
        let url = "/api/exercises/" + train_id

        chai.request(app)
            .get(url)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.map(key => {
                    key.should.have.property("exercise_id")
                    key.should.have.property("name")
                    key.should.have.property("description")
                    key.should.have.property("list_id")
                    key.should.have.property("url")
                    key.should.have.property("time")
                });
            });
    });

    it("тренировки не существует", () => {
        let train_id = 404
        let url = "/api/exercises/" + train_id

        chai.request(app)
            .get(url)
            .end((err, res) => {
                res.should.have.status(400);
            });
    })

});