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

describe('DELETE', () => {
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
})
