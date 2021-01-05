const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const restricted = require('../api/middleware/restricted')
//routing
const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')
const server = express()

//middleware
server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/plants', restricted,plantsRouter)
server.get('/', (_, res) => {
  res.json("welcome to our api")
})
module.exports = server
