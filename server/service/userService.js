const { Op } = require('sequelize')
const db = require("../db");
const EntityExistsError = require('../error/EntityExistsError');
const NullError = require("../error/nullError");
const User = db.User

class UserService {

    async create(newUser) {
        const { name, email, password } = newUser;
        
        const usr = await this.getByEmail(email);
        const usr2 = await this.getByName(name);
        console.log(JSON.stringify(usr, null, 2))
        if (usr != null){
            throw new EntityExistsError("email is used another account");
        }

        if (usr2 != null){
            throw new EntityExistsError("name is used another account");
        }

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

    async getByNameAndPassword(user) {
        const { name, password } = user;

        if (name == null || password == null) {
            throw new NullError("name or password is empty");
        }

        const usr = await User.findOne({
            where: {
                [Op.and]: [{ name: name, password: password }]
            }
        }
        )

        if (usr == null) {
            throw new NullError("name or password is not right");
        }

        return usr;
    }

    async getByName(name) {

        if (name == null) {
            throw new NullError("name is null");
        }

        const usr = User.findOne({
            where: {
                name: name
            }
        }
        )

        return usr;
    }

    async getByEmail(email) {

        if (email == null) {
            throw new NullError("name is null");
        }

        const usr = User.findOne({
            where: {
                email: email
            }
        }
        )

        return usr;
    }

    async changeLogin(user_id, login){
        console.log("Service changeLogin")
        console.log(user_id)
        await User.update(
            {
                name: login,
            },
            {
              where: {
                user_id: [Number(user_id)],
              },
            }
        )
        const user = await User.findOne({
            where: {
                user_id: [Number(user_id)]
            }
        }
        )
        console.log(user)
        console.log(User);
        return user
    }

    async changePassword(user_id, password){
        console.log("Service changePassword")
        console.log(user_id)
        await User.update(
            {
                password: password,
            },
            {
              where: {
                user_id: [Number(user_id)],
              },
            }
        )
        const user = await User.findOne({
            where: {
                user_id: [Number(user_id)]
            }
        }
        )
        console.log(user)
        console.log(User);
        return user
    }
}


module.exports =  new UserService();