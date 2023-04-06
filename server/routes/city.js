const express = require('express')
const db = require('../db/cities')
const router = express.Router()

//POST /api/v1/cities/:countryId/new
router.post('/:countryId/new', (req, res) => {
  const countryId = req.params.countryId
  const cities = req.body

  const newCity = { city: cities.city, country_id: countryId }

  db.createCity(countryId, newCity)
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

//GET /api/v1/cities/:countryId/:cityId
router.get('/:countryId/:cityId', (req, res) => {
  const { countryId, cityId } = req.params
  db.readCityByCountryAndCityId(countryId, cityId)
    .then((city) => {
      res.json(city)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//PATCH /api/v1/cities/:countryId/:cityId
router.patch('/:countryId/:cityId', (req, res) => {
  const { countryId, cityId } = req.params

  const updatedCity = req.body

  return db
    .updateCity(countryId, cityId, updatedCity)
    .then(() => {
      res.json({ countryId: countryId, city: updatedCity.city })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//DELETE /api/v1/cities/:countryId/:cityId
router.delete('/:countryId/:cityId', (req, res) => {
  const { countryId, cityId } = req.params
  db.deleteCity(countryId, cityId)
    .then(() => {
      return db.readCitiesByCountryId(countryId)
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
