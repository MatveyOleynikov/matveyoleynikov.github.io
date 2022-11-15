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
            console.log(decodeData)
            // console.log('dsafslffsda');
            req.user = { user_id: decodeData.user_id, name :decodeData.name, email: decodeData.email };
            console.log(req.user)
            next()
    }
    catch (e){
        console.log(e)
        return res.status(403).json({message : "Forbidden"})
    }
}

module.exports = authMiddlewaree;