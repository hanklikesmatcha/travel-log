const connection = require('./connection')

function readCountries(db = connection) {
  return db('countries').select()
}

function createCountry(countryName, db = connection) {
  return db('countries').insert({ country: countryName })
}

function updateCountry(countryId, countryName, db = connection) {
  return db('countries').where('id', countryId).update({ country: countryName })
}

function deleteCountry(countryId, db = connection) {
  return db('countries').where('id', countryId).del()
}

module.exports = { createCountry, readCountries, updateCountry, deleteCountry }
