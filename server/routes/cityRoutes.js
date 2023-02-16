const express = require('express')
const db = require('../db/dbCities')
const router = express.Router()

//GET /api/v1/cities
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

//POST /api/v1/cities/:countryId/new
router.post('/:countryId/new', (req, res) => {
  const countryId = req.params.countryId
  const cities = req.body

  const newCity = { city: cities.city, country_id: countryId }

  db.addCity(newCity)
    .then(() => db.getCitiesByCountryId(countryId))
    .then((cities) => res.json(cities))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//POST /api/v1/cities/new
router.post('/', (req, res) => {
  const countryName = req.body

  db.addCountry(countryName.name)
    .then(() => db.getCountries())
    .then((countries) => res.json(countries))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

module.exports = router
