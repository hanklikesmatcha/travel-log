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

describe('getCountries', () => {
  it('returns an array of countries', () => {
    return db.getCountries(testDb).then((countries) => {
      expect(countries).toHaveLength(3)
      expect(countries[0].country).toBe('Spain')
      return null
    })
  })
})

describe('addCountry', () => {
  it('adds a country', () => {
    return db
      .addCountry('France', testDb)
      .then((res) => {
        console.log(res)
        expect(res[0]).toBe(4)
        return db.getCountries(testDb)
      })
      .then((countries) => {
        expect(countries).toHaveLength(4)
        expect(countries[3].country).toBe('France')
      })
  })
})

describe('deleteCountry', () => {
  it('deletes a country', () => {
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
