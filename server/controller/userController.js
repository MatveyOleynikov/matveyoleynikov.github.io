const UserService = require('../service/userService')

class UserController{

    async registration(req, res){
        
        try{
            console.log(req.body)
            const user = await UserService.create(req.body);
            res.json(user);
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }

    async getByNameAndPassword(req, res){

        try{
            
            const usr = {name : req.query.name, password: req.query.password};
            console.log(usr);
            const user = await UserService.getByNameAndPassword(usr)
            res.json(user)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}

module.exports = new UserController();