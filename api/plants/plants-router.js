const express = require('express')
const plantsDb = require('./plants-modal')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('hello')
})

router.get('/:id', (req, res) => {

})

router.post('/:id', (req, res) => {})

router.put('/:id', (req, res) => { })

router.delete('/:id', async (req, res) => {
    try {
        const plant = await plantsDb.burn(req.id)
        res.status(200).json({plant})
    } catch (error) {
        
    }
})

module.exports = router
