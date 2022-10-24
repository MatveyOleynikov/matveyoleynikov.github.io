const { Op } = require('sequelize')
const db = require("../db");
const NullError = require("../error/nullError");
const User = db.User

class UserService {

    async create(newUser) {
        const { name, email, password } = newUser
        const registrationUser = await User.create({ name: name, email: email, password: password });
        return registrationUser;
    }

    async getById(id) {

        if (!id) {
            throw new Error("id not created");
        }

        if (typeof id != "number") {
            throw new Error("id is not number");
        }

        const user = await User.findOne({
            where: {
                user_id: [id]
            }
        }
        )
        
        if (user == null) {
            throw new NullError("user not found");
        }

        return user;
    }

    async getByLoginAndPassword(user) {
        const { name, password } = user;

        if (name == null || password == null) {
            throw new NullError("login or password is empty");
        }

        const usr = await User.findOne({
            where: {
                [Op.and]: [{ name: name, password: password }]
            }
        }
        )

        if (usr == null) {
            throw new NullError("login or password is not right");
        }

        return usr;
    }

    async getByLogin(login) {

        if (login == null) {
            throw new NullError("login is null");
        }

        const usr = User.findOne({
            where: {
                name: login
            }
        }
        )

        return usr;
    }

    async getByEmail(email) {

        if (email == null) {
            throw new NullError("login is null");
        }

        const usr = User.findOne({
            where: {
                email: email
            }
        }
        )

        return usr;
    }
}

userService = new UserService();