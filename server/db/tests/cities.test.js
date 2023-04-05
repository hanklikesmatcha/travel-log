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

// describe('createCity by countryId', () => {
//   it('returns an array of cities by countryId', () => {
//     return db.createCity(1, 'Madrid', testDb)
//       .then((res)=>{
//         expect(res[0]).toBe(2)
//         return db.readCitiesByCountryId(1, testDb)
//       })
//       .then((cities) => {
//         expect(cities).toHaveLength(2)
//         expect(cities[1].city).toBe('Madrid')
//       })
//   })
// })

describe('updateCity', () => {
  it('updates a city', () => {
    return db
      .updateCity(1, 'Madrid', testDb)
      .then(() => {
        return db.readCitiesByCountryId(1, testDb)
      })
      .then((cities) => {
        expect(cities[0].city).toBe('Madrid')
      })
  })
})
