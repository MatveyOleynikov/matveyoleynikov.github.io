const UserService = require('../service/userService')

class UserController{

    async registration(req, res){
        
        try{
            const user = UserService.create(res.body);
            res.json(user)
        }
        catch(e){
            res.status(400).json(e.message);
        }
    }

    async getByNameAndPassword(req, res){

        try{
            const user = UserService.getByNameAndPassword(res.body)
            res.json(user)
        }
        catch(e){
            res.status(404).json(e.message);
        }
    }
}