const express = require('express')
const plantsDb = require('./plants-modal')
const router = express.Router()



router.get('/', async (_, res) => {

    try {
        const plants = await plantsDb.getAllPlants()
        res.status(200).json(plants)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const { nickname, species, h2o_frequency, picture, user_id } = req.body
    
    try {
        const newPlant = await plantsDb.add({
          nickname,
          species,
          h2o_frequency,
          picture,
          user_id,
        })
        res.status(201).json(newPlant)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/:id', async (req, res) => {
  const { nickname, species, h2o_frequency, picture, user_id } = req.body

  try {
    const updatedPlant = await plantsDb.update(req.params.id,{
      nickname,
      species,
      h2o_frequency,
      picture,
      user_id,
    })
    res.status(201).json(updatedPlant)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


router.delete('/:id', async (req, res) => {
    try {
        const plant = await plantsDb.burn(req.params.id)
        res.status(200).json({plant})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = router
