const connection = require('./connection')

function readCountries(db = connection) {
  return db('countries').select()
}

function readCountry(countryId, db = connection) {
  return db('countries').where('id', countryId).select('id', 'country')
}

function createCountry(newCountry, db = connection) {
  return db('countries').insert({ country: newCountry })
}

function updateCountry(countryId, updatedCountry, db = connection) {
  return db('countries')
    .where('id', countryId)
    .update({ country: updatedCountry })
}

function deleteCountry(countryId, db = connection) {
  return db('countries').where('id', countryId).del()
}

module.exports = {
  createCountry,
  readCountries,
  updateCountry,
  deleteCountry,
  readCountry,
}
