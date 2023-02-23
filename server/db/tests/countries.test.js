const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../countries')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('deleteCountry', () => {
  test('deletes a country', () => {
    return db
      .deleteCountry(1, testDb)
      .then(() => {
        return db.getCountries(testDb)
      })
      .then((countries) => {
        expect(countries).toHaveLength(2)
      })
  })
})
