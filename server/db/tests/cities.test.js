const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../cities')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('readCitiesByCountryId', () => {
  it('returns an array of cities by countryId', () => {
    return db.readCitiesByCountryId(1, testDb).then((cities) => {
      expect(cities).toHaveLength(1)
      expect(cities[0].city).toBe('Barcelona')
      return null
    })
  })
})
