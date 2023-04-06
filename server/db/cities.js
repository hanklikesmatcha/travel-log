const connection = require('./connection')

function createCity(countryId, newCity, db = connection) {
  return db('cities').where('country_id', countryId).insert(newCity)
}

function readCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

function updateCity(countryId, updatedCity, db = connection) {
  return db('cities')
    .join('countries', 'countries.id', 'cities.country_id')
    .update({ city: updatedCity })
    .where('country_id', countryId)
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
