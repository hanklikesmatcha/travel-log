const connection = require('./connection')

function createCity(countryId, newCity, db = connection) {
  return db('cities').where('country_id', countryId).insert(newCity)
}

function readCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

function updateCity(cityId, updatedCity, db = connection) {
  return db('cities').update({ city: updatedCity }).where({ cityId })
}

function deleteCity(cityId, db = connection) {
  return db('cities').where('id', cityId).del()
}

module.exports = {
  createCity,
  updateCity,
  readCitiesByCountryId,
  deleteCity,
}
