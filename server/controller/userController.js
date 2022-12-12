const UserService = require('../service/userService')
const jwt = require('jsonwebtoken')
const {secret} = require('../config/configJWT')
const NullError = require('../error/nullError')

generateJWT = (user_id, name, email) => {

    const payload = {
        user_id,
        name,
        email
    }

    return jwt.sign(payload, secret, {expiresIn : '7h'})
}

// Я просто разбираюсь с работой контроллера

class UserController{

    async registration(req, res){
        
        try{
            console.log(req.body)
            const user = await UserService.create(req.body);
            const token = generateJWT(user.user_id, user.name, user.email)
            res.json(token)
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }

    async login(req, res){

        try{
            
            const usr = {name : req.query.name, password: req.query.password};
            console.log(usr);
            const user = await UserService.getByNameAndPassword(usr)
            const token = generateJWT(user.user_id, user.name, user.email)
            console.log(token)
            res.json(token)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }

    async getUser(req, res){
    
        const user = req.user
        if (!user){
            res.status(403).json("forbidden");
        }
        else {
            // console.log('sdaas ' + user)
            res.json(user)
        }
    }

    async changeLogin(req, res){
        console.log(req);
        const user_id = req.query.id
        const login = req.query.login
        console.log("changeLogin");
        console.log(user_id);
        console.log(login);
        const user = await UserService.changeLogin(user_id, login);
        res.json(user)
    }
}

module.exports = new UserController();