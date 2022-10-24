const express = require('express')
const Sequalize = require('sequelize')

const PORT = 4000
const app = express()


app.get("/api" , (req, res) =>{
    console.log(req.query)
    res.status(200).json("Сервер работает")
})

const startUp = () => {

    
    try{
    app.listen(PORT, () => console.log("SERVER START ON " + PORT + " PORT"));
    }
    catch(e){
    
    }

}

startUp()