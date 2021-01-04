const jwt = require('jsonwebtoken')

const restricted = (req, res, next) => {
  const secret = process.env.JWT_SECRET || 'secret'
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'token required' })
  } else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json('token invalid')
      } else {
        req.decodedJwt = decoded
      }
      next()
    })
  }
}

module.exports = restricted
