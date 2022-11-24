const db = require("../db");
const Train = db.Train

class TrainService {
    async getAllTrains(){
        const allTrains = await Train.findAll()

        return allTrains
    }
}

module.exports =  new TrainService();