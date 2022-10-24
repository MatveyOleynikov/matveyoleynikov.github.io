const express = require('express')
const Sequalize = require('sequelize')
const userRouter = require('./router/userRouter')
const cors = require('cors')


const PORT = 4000
const app = express()


// app.get("/api" , (req, res) =>{
//     console.log(req.query)
//     res.status(200).json("Сервер работает")
// })

app.use(express.json())
app.use(cors())

const startUp = () => {

    app.use('/api', userRouter)
    
    try {

        app.listen(PORT, () => console.log("SERVER START ON " + PORT + " PORT"));
    }
    catch (e) {
        console.log("error")
    }

}

startUp()
