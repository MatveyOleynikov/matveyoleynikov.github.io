const jwt = require('jsonwebtoken')
const {secret} = require('../config/configJWT')
const authMiddlewaree = (req, res, next) => {
    if (req.method === "OPTIONS") {
        next();
    }
    
    try {   
            const token = req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(403).json({message : "Forbidden"})
            }

            const decodeData = jwt.verify(token, secret )
            req.user = { name :decodeData.name, email: decodeData.email };
            console.log(res)
            next()
    }
    catch (e){
        console.log(e)
        return res.status(403).json({message : "Forbidden"})
    }
}

module.exports = authMiddlewaree;