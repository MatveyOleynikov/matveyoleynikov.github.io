const express = require('express')
const Sequalize = require('sequelize')
const userRouter = require('./router/userRouter')
const cors = require('cors')
const authMiddlewaree = require('../server/middlewaree/authMiddlewaree')
const path = require('path');


const PORT = 4000
const app = express()


// app.get("/api" , (req, res) =>{
//     console.log(req.query)
//     res.status(200).json("Сервер работает")
// })

app.use(express.json())
app.use(cors())

const viewPath = path.join(__dirname, '..' , 'front')
console.log(viewPath)

const startUp = () => {

    app.use('/api', userRouter)
    app.use(express.static(viewPath))
    try {

        app.listen(PORT, () => console.log("SERVER START ON " + PORT + " PORT"));
    }
    catch (e) {
        console.log("error")
    }

}

startUp()

app.get('subscription.html', authMiddlewaree, (req, res) =>{
    return res.status(401).end();
}
)

app.get('/subscription', authMiddlewaree , (req, res) =>{
    // console.log(__dirname)
     res.sendFile(path.join(viewPath + '/subscription.html'));
}   
)