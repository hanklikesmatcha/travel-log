const express = require('express')
const db = require('../db/countries')
const router = express.Router()

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

//GET /api/v1/countries
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

//GET /api/v1/countries/:countryId
router.get('/:countryId', (req, res) => {
  const id = Number(req.params.id)

  db.getCountry(id)
    .then((result) => res.json(result))
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//DELETE /api/v1/countries/:countryId
router.delete('/:countryId', (req, res) => {
  const countryId = Number(req.params.id)
  db.deleteCountry(countryId)
    .then(() => {
      db.getCountries()
        .then((countries) => {
          res.json(countries)
        })
        .catch((e) => {
          console.error(e)
          res.status(500).json({ message: 'Hmm, try again' })
        })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

//PATCH /api/v1/countries/:countryId
router.patch('/:countryId', (req, res) => {
  const id = Number(req.params.id)
  const updatedCountry = req.body
  return db
    .updateCountry(id, updatedCountry.country)
    .then(() => {
      res.json({ id: id, city: updatedCountry.city })
    })
    .catch((e) => {
      console.error(e)
      res.status(500).json({ message: 'Hmm, try again' })
    })
})

module.exports = router
