const connection = require('./connection')

function getCountries(db = connection) {
  return db('countries').select()
}

module.exports = {
  getCountries,
}
