const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    console.log('hello')
})

router.get('/:id', (req, res) => {

})

router.post('/:id', (req, res) => {})

router.put('/:id', (req, res) => { })

router.delete('/:id', (req, res) => {})

module.exports = router