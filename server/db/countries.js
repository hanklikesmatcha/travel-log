const connection = require('./connection')

function readCountries(db = connection) {
  return db('countries').select()
}

function createCountry(countryName, db = connection) {
  return db('countries').insert({ country: countryName })
}

function updateCountry(id, countryName, db = connection) {
  return db('countries').where('id', id).update({ country: countryName })
}

function deleteCountry(id, db = connection) {
  return db('countries').where('id', id).del()
}

module.exports = { createCountry, readCountries, updateCountry, deleteCountry }
