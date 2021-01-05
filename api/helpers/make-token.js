const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../auth/jwt-secret')
const makeToken = ({ id, username }) => {
     const payload = {
       username,
       subject: id,
     }
    const options = {
      expiresIn: '8 hours',
    }

    return jwt.sign(payload, jwtSecret, options)
}

module.exports = makeToken
