const request = require('supertest')
const server = require('../../server')
const db = require('../../db/countries')

jest.mock('../../db/cities')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn())
})

describe('GET /', () => {
  it('reads all cities by countryId', () => {
    db.readCitiesByCountryId.mockReturnValue(
      Promise.resolve([
        { id: 1, city: 'Madrid' },
        { id: 2, city: 'Valencia' },
      ])
    )
    return request(server)
      .get('/api/v1/cities/1')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].city).toBe('Madrid')
        expect(res.body[1].id).toBe(2)
      })
  })
  it('returns 500 and logs error message when error', () => {
    db.readCitiesByCountryId.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/cities/1')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
