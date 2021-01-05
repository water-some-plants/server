const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../auth/jwt-secret')
const restricted = (req, res, next) => {
 const token = req.headers.authorization 
  if (!token) {
    return res.status(401).json({ message: 'token required' })
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json('token invalid')
      } else {
        req.decodedJwt = decoded
      }
      next()
    })
  }
}

module.exports = restricted
