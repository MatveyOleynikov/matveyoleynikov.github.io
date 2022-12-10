
// тестирование
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = chai.expect;
const assert = require('assert')
chai.use(chaiHttp);



// подключаемые элементы
const app = require('../../server/app')
const { sequelize } = require('../../server/db')
const deleteLastUserQuery = "delete from users order by user_id desc limit 1"


describe("Авторизация", function () {

  describe("получение JWT-токена по логину или паролю", function () {

    it("ffff", () => {
      const login = "user";
      const password = "password";
      const url = "/api/users" + "?" + "name=" + login + "&" + "password=" + password
      chai.request(app)
        .get(url).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('string');
        });
    });

  });

  describe("получение JWT-токена по логину или паролю. Логин неправильный", function () {

    it("ffff", () => {
      const login = "user2";
      const password = "password";
      const url = "/api/users" + "?" + "name=" + login + "&" + "password=" + password
      chai.request(app)
        .get(url).end((err, res) => {
          res.should.have.status(404);
        });
    });
  });


  describe("получение JWT-токена по логину или паролю. Пароль неправильный", function () {

    it("ffff", () => {
      const login = "user2";
      const password = "password";
      const url = "/api/users" + "?" + "name=" + login + "&" + "password=" + password
      chai.request(app)
        .get(url).end((err, res) => {
          res.should.have.status(404);
        });
    });
  });


});


describe("Регистрация", function () {


  it("типовой тест", function (done) {
    let login = "login"
    let email = "email@gmail.com"
    let password = "password"

    let newUser = {
      name: login,
      password: password,
      email: email
    }

    chai.request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('string');
        done();
      })
  });

  it("логин использует другой пользователь", function (done) {
    let login = "login"
    let email = "email1@gmail.com"
    let password = "password"

    let newUser = {
      name: login,
      password: password,
      email: email
    }

    chai.request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        // res.body.should.be.a('string');
        done();
      })
  });

  it("почту использует другой пользователь", function (done) {
    let login = "login1"
    let email = "email@gmail.com"
    let password = "password"

    let newUser = {
      name: login,
      password: password,
      email: email
    }

    chai.request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        // res.body.should.be.a('string');
        done();
      })
  });

  it("почту использует другой пользователь", function (done) {
    let login = "login123"
    let email = "email@gmail.com"
    let password = "password"

    let newUser = {
      name: login,
      password: password,
      email: email
    }

    chai.request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        // res.body.should.be.a('string');
        done();
      })
  });

  it("почту и логин использует другой пользователь", function (done) {
    let login = "login"
    let email = "email@gmail.com"
    let password = "password"

    let newUser = {
      name: login,
      password: password,
      email: email
    }

    chai.request(app)
      .post("/api/users")
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(400);
        // res.body.should.be.a('string');
        done();
      })
  });

  after((done) => {
    sequelize.query(deleteLastUserQuery)
    done()
  })


});


describe("Получение пользователем данных о себе", function () {

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

    let url = "/api/users/user"
    chai.request(app)
      .get(url)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("user_id");
        res.body.should.have.property("name");
        res.body.should.have.property("email");
      })

    done();
  });
}
)


describe("Получение пользователем данных о себе. Возможные взломы", function () {

  let token = ''
  it("неавторизованный пользователь", (done) => {

    let url = "/api/users/user"
    chai.request(app)
      .get(url)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        res.should.have.status(403);
      })

    done();
  });


  it("Неправильный токен", (done) => {
    token = "zxmnkzcxhcjkALKKSDFHvclnbzldfig"
    let url = "/api/users/user"
    chai.request(app)
      .get(url)
      .set({ Authorization: `Bearer ${token}` })
      .end((err, res) => {
        res.should.have.status(403);
      })

    done();
  });
}
);


describe("добавить упражнения в тренировку", function () {


}
);