const bcryptjs = require('bcryptjs')

const hashPassword = (password) => {

    const rounds = process.env.BCRYPT_ROUNDS || 8

    const hashedPassword = bcryptjs.hashSync(password, rounds)

    return hashedPassword
}

module.exports = hashPassword