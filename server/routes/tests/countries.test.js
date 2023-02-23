const request = require('supertest')
const server = require('../../server')
const db = require('../../db/countries')

jest.mock('../../db/countries')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn())
})

describe('GET /', () => {
  it('reads all countries', () => {
    db.readCountries.mockReturnValue(
      Promise.resolve([
        { id: 1, country: 'UK' },
        { id: 2, country: 'Canada' },
      ])
    )
    return request(server)
      .get('/api/v1/countries')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].country).toBe('UK')
        expect(res.body[1].id).toBe(2)
      })
  })
  it('returns 500 and logs error message when error', () => {
    db.readCountries.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/countries')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('DELETE /:countryId', () => {
  it('deletes a country', () => {
    const fakeData = [{ id: 1 }, { id: 2 }, { id: 3 }]

    db.deleteCountry.mockReturnValue(Promise.resolve())
    return request(server)
      .delete(`/api/v1/countries/${fakeData[0].id}`)
      .send({ id: 1 })
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
  it('returns 500 and logs error message when error', () => {
    db.deleteCountry.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .delete('/api/v1/countries/2')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})

describe('POST /', () => {
  it('creates an array of all countries and a new country', () => {
    const fakeData = { country: 'Mexico' }

    db.createCountry.mockReturnValue(Promise.resolve([1]))
    db.readCountries.mockReturnValue(Promise.resolve(fakeData))
    return request(server)
      .post('/api/v1/countries')
      .send(fakeData)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.country).toBe('Mexico')
      })
  })
  it('returns 500 and logs error message when error', () => {
    db.readCountries.mockImplementation(() => Promise.reject('error'))
    return request(server)
      .get('/api/v1/countries')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
