const connection = require('./connection')

function createCity(city, db = connection) {
  return db('cities').insert(city)
}

function readCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

function updateCity(id, city, db = connection) {
  return db('cities').update({ city: city }).where({ id })
}

function deleteCity(id, db = connection) {
  return db('cities').where('id', id).del()
}

module.exports = {
  createCity,
  updateCity,
  readCitiesByCountryId,
  deleteCity,
}
