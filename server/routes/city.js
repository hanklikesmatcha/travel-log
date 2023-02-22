const express = require('express')
const db = require('../db/cities')
const router = express.Router()

//POST /api/v1/cities/:countryId/new
router.post('/:countryId/new', (req, res) => {
  const countryId = req.params.countryId
  const cities = req.body

  const newCity = { city: cities.city, country_id: countryId }

  db.createCity(newCity)
    .then(() => db.readCitiesByCountryId(countryId))
    .then((cities) => res.json(cities))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//GET /api/v1/cities/:countryId
router.get('/:countryId', (req, res) => {
  db.readCitiesByCountryId(req.params.countryId)
    .then((cities) => {
      res.json(cities)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//PATCH /api/v1/cities/:id
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const updatedCity = req.body

  return db
    .updateCity(id, updatedCity.city)
    .then(() => {
      res.json({ id: id, city: updatedCity.city })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//DELETE /api/v1/cities/:countryId
router.delete('/:countryId/:id', (req, res) => {
  db.deleteCity(Number(req.params.id))
    .then(() => {
      return db.readCitiesByCountryId(Number(req.params.countryId))
    })
    .then((cities) => {
      res.json(cities)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

module.exports = router
