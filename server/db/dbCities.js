const connection = require('./connection')

function getCountries(db = connection) {
  return db('countries').select()
}

function getCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

function deleteCity(id, db = connection) {
  return db('cities').where('id', id).del()
}

module.exports = {
  getCountries,
  getCitiesByCountryId,
  deleteCity,
}
