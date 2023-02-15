const express = require('express')
const db = require('../db/dbCities')
const router = express.Router()

//GET /api/v1/
router.get('/', (req, res) => {
  db.getCountries()
    .then((countries) => {
      res.json(countries)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//GET /api/v1/cities/:countryId
router.get('/:countryId', (req, res) => {
  db.getCitiesByCountryId(req.params.countryId)
    .then((cities) => {
      res.json(cities)
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
      return db.getCitiesByCountryId(Number(req.params.countryId))
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
