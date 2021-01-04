const express = require('express')

//middleware
const middleware = require('../middleware/middleware')

//helpers
const hashPassword = require('../helpers/password-hash')
const makeToken = require('../helpers/make-token')

const router = express.Router()

router.post('/login', middleware.loginValidation, (req, res) => {
  try {
    const token = makeToken({
      id: 5,
      username: req.body.username,
      password: req.body.password,
    })

    res.status(200).json({ token })
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

router.post('/register', middleware.registerValidation, (req, res) => {
  const newUser = {
    username: req.body.username,
    phoneNumber: req.body.phoneNumber,
    password: hashPassword(req.body.password),
  }
  try {
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json('username is taken')
  }
})

module.exports = router
