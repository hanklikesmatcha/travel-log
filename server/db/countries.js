const connection = require('./connection')

function getCountries(db = connection) {
  return db('countries').select()
}

function addCountry(countryName, db = connection) {
  return db('countries').insert({ country: countryName })
}

function deleteCountry(id, db = connection) {
  return db('countries').where('id', id).del()
}

module.exports = { getCountries, addCountry, deleteCountry }
