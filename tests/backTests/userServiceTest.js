// тестирование
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
const expect = chai.expect;
const assert = require('assert')
chai.use(chaiHttp);

//функция 
const userService = require('../../server/service/userService');
const { use } = require('chai');
const NullError = require('../../server/error/nullError');


describe('поиск пользователя', async function () {

    it("получение пользователя по mail.", async function () {
        let mail = "radnd@gmail.com"
        const expectedUser = {
            user_id: 1,
            name: "user",
            email: mail,
            password: "password"
        }

        const data = await userService.getByEmail(mail)
        const user = {
            user_id: data.user_id,
            name: data.name,
            email: data.email,
            password: data.password
        }

        assert.equal(expectedUser.user_id, user.user_id)
        assert.equal(expectedUser.name, user.name)
        assert.equal(expectedUser.email, user.email)
        assert.equal(expectedUser.password, user.password)
    });

    it("получение пользователя по mail. Почта не найдена", async function () {
        let mail = "radn@gmail.com"
        const expectedUser = {
            user_id: 1,
            name: "name",
            email: mail,
            password: "password"
        }
        const user = await userService.getByEmail(mail)
        assert.equal(null, user)


    });

    it("получение пользователя по id.", async function () {
        let user_id = 1;
        const expectedUser = {
            user_id: 1,
            name: "user",
            email: "radnd@gmail.com",
            password: "password"
        }

        const data = await userService.getById(user_id)
        const user = {
            user_id: data.user_id,
            name: data.name,
            email: data.email,
            password: data.password
        }

        assert.equal(expectedUser.user_id, user.user_id)
        assert.equal(expectedUser.name, user.name)
        assert.equal(expectedUser.email, user.email)
        assert.equal(expectedUser.password, user.password)
    });

    it("получение пользователя по имени.", async function () {
        let name = "user";
        const expectedUser = {
            user_id: 1,
            name: "user",
            email: "radnd@gmail.com",
            password: "password"
        }

        const data = await userService.getByName(name)
        const user = {
            user_id: data.user_id,
            name: data.name,
            email: data.email,
            password: data.password
        }

        assert.equal(expectedUser.user_id, user.user_id)
        assert.equal(expectedUser.name, user.name)
        assert.equal(expectedUser.email, user.email)
        assert.equal(expectedUser.password, user.password)
    });

    it("получение пользователя по имени и паролю.", async function () {
        let name = "user";
        let password = "password"
        const expectedUser = {
            user_id: 1,
            name: "user",
            email: "radnd@gmail.com",
            password: "password"
        }

        const data = await userService.getByNameAndPassword({name, password})
        const user = {
            user_id: data.user_id,
            name: data.name,
            email: data.email,
            password: data.password
        }

        assert.equal(expectedUser.user_id, user.user_id)
        assert.equal(expectedUser.name, user.name)
        assert.equal(expectedUser.email, user.email)
        assert.equal(expectedUser.password, user.password)
    });


});