const express = require('express')
const Sequelize = require('sequelize')


const PORT = 4000
const app = express()
const configDB = {
    name: 'eyesightkick',
    user: 'root',
    password: 'myRoTpass1ord',
    host: "localhost",
    dialect : "mysql"
}

const sequelize = new Sequelize(
    configDB.name,
    configDB.user,
    configDB.password,
    {
        host: configDB.host,
        dialect: configDB.dialect
    }
)

sequelize.auth


app.get("/api" , (req, res) =>{
    console.log(req.query)
    res.status(200).json("Сервер работает")
})

const startUp = () => {

    sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });

    try{
    app.listen(PORT, () => console.log("SERVER START ON " + PORT + " PORT"));
    }
    catch(e){
        Sys 
    }

}

startUp()