const connection = require('./connection')

function getCountries(db = connection) {
  return db('countries').select()
}

function getCountry(id, db = connection) {
  return db('countries').where({ id: id }).select().first()
}

function addCountry(id, db = connection) {
  return db('countries').insert({ country: id })
}

function updateCountry(id, country, db = connection) {
  return db('countries').update({ country: country }).where({ id })
}

function deleteCountry(id, db = connection) {
  return db('countries').where({ id }).del()
}

module.exports = {
  getCountries,
  addCountry,
  deleteCountry,
  getCountry,
  updateCountry,
}
