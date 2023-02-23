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

// //DELETE /api/v1/countries/:countryId
// router.delete('/:countryId', (req, res) => {
//   const countryId = req.params.id

//   db.deleteCountry(Number(countryId))
//     .then(() => {
//       return db.getCountries()
//     })
//     .then((countries) => {
//       res.json(countries)
//     })
//     .catch((e) => {
//       console.error(e)
//       res.status(500).json({ message: 'Hmm, try again' })
//     })
// })

module.exports = router
