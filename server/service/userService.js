const db = require("../db")
const User = db.User

class UserService{

    async create(newUser) {
        const {name, email, password} = newUser
        const registrationUser = await User.create({name: name, email: email, password: password});
        return registrationUser;
    }

    async getById(id){

        if (!id){
            throw new Error("id not created");
        }
        
        if (typeof id != "number"){
            throw new Error("id is not number");
        }

        const user =  await User.findOne({
            where: {
                user_id: [id]
            }
        }
        )
        
        if (user == null){
            console.log("error");
        }
        return user;
    }

    async getByLoginAndPassword(user){
        const {name, password} = user;
        
        if(name == null || password == null){
            throw new Error("");
        }

    }
}

userService = new UserService()

