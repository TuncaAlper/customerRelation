const { Router } = require('express')   
const {toJWT, toData} =require('./jwt')

const router = new Router()

router.post('/logins', (req, res, next) => {
    
    if (req.body.email && req.body.password) {
        // normally we would check the password here, now we just send a JWT
        return res.status(200).send({jwt: toJWT({userID: 1})
    })
        }else{
            return res.status(400).send({
                message: `Please supply a valid email and password`
        })
    }

})
      

module.exports = router