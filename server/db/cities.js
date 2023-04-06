const connection = require('./connection')

function createCity(countryId, newCity, db = connection) {
  return db('cities').where('country_id', countryId).insert(newCity)
}

function readCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

function readCityByCountryAndCityId(countryId, cityId, db = connection) {
  return db('cities')
    .where({ country_id: countryId, id: cityId })
    .select('city')
}

function updateCity(countryId, cityId, updatedCity, db = connection) {
  return db('cities')
    .join('countries', 'countries.id', 'cities.country_id')
    .update({ city: updatedCity })
    .where('country_id', countryId)
    .where('id', cityId)
}

function deleteCity(countryId, cityId, db = connection) {
  return db('cities').where('id', cityId).where('country_id', countryId).del()
}

module.exports = {
  createCity,
  updateCity,
  readCitiesByCountryId,
  deleteCity,
  readCityByCountryAndCityId,
}
