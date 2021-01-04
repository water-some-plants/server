const jwt = require('jsonwebtoken')

const makeToken = ({ id, username }) => {
    const payload = {
      id,
      username,
    }
    const options = {
        expiresIn: '10h'
    }
    const secret = process.env.JWT_SECRET || 'secret'

    return jwt.sign(payload, secret, options)
}

module.exports = makeToken