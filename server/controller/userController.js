const UserService = require('../service/userService')
const jwt = require('jsonwebtoken')
const {secret} = require('../config/configJWT')

generateJWT = (userId, name, email) => {

    const payload = {
        userId,
        name,
        email
    }

    return jwt.sign(payload, secret, {expiresIn : '7h'})
}



class UserController{

    async registration(req, res){
        
        try{
            console.log(req.body)
            const user = await UserService.create(req.body);
            const token = generateJWT(user.userId, user.name,)
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
            const token = generateJWT(user.userId, user.name, user.email)
            console.log(token)
            res.json(token)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}

module.exports = new UserController();