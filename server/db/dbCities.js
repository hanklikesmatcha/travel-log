const connection = require('./connection')

function getCountries(db = connection) {
  return db('countries').select()
}

function getCitiesByCountryId(countryId, db = connection) {
  return db('cities').where('country_id', countryId).select('id', 'city')
}

module.exports = {
  getCountries,
  getCitiesByCountryId,
}
