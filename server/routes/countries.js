const express = require('express')
const db = require('../db/countries')
const router = express.Router()

//POST /api/v1/countries/
router.post('/', (req, res) => {
  const countryName = req.body

  db.createCountry(countryName.country)
    .then(() => db.readCountries())
    .then((countries) => res.json(countries))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//GET /api/v1/countries
router.get('/', (req, res) => {
  db.readCountries()
    .then((countries) => {
      res.json(countries)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//DELETE /api/v1/countries/:countryId
router.delete('/:countryId', (req, res) => {
  const countryId = Number(req.params.countryId)

  db.deleteCountry(countryId)
    .then(() => {
      return db.readCountries()
    })
    .then((countries) => {
      res.json(countries)
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//PATCH /api/v1/countries/:countryId
router.patch('/:countryId', (req, res) => {
  const countryId = Number(req.params.countryId)
  const updatedCountry = req.body

  db.updateCountry(countryId, updatedCountry.country)
    .then(() => {
      res.json({ id: countryId, country: updatedCountry.country })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

module.exports = router
