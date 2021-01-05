const express = require('express')
const userDb = require('./user-modal')
const bcryptjs = require('bcryptjs')

//middleware
const middleware = require('../middleware/middleware')

//helpers
const hashPassword = require('../helpers/password-hash')
const makeToken = require('../helpers/make-token')

const router = express.Router()

router.post('/login', middleware.loginValidation, async (req, res) => {
  const { username, password } = req.body
  try {
    const [user] = await userDb.findBy({ username })
    if (user && bcryptjs.compareSync(password, user.password)) {
      const token = makeToken({ id: user.id, username })
      res.status(200).json({ token })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

router.post('/register', middleware.registerValidation, async (req, res) => {
  const newUser = {
    username: req.body.username,
    phone_number: req.body.phoneNumber,
    password: hashPassword(req.body.password),
  }
  try {
    const user = await userDb.add(newUser)
    if (user.id) {
      res.status(201).json({ username: user.username, id: user.id })
    } else {
      res.status(500).json('username is taken')
    }
  } catch (error) {
    res.status(500).json('username is taken')
  }
})

router.put('/user/:id', async (req, res) => {
  const updateUser = {
    username: req.body.username,
    phone_number: req.body.phoneNumber
  }
  try {
    const updatedUser = await userDb.update(req.params.id, updateUser)
    res.status(201).json(updatedUser)
  } catch (error) {
    res.status(500).json({message: 'username taken'})
  }
})

module.exports = router
