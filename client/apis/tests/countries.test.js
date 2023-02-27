import nock from 'nock'

import { addCountry, deleteCountry, getCountries } from '../countries'

describe('getCountries', () => {
  it('get countries from the api', () => {
    nock('http://localhost')
      .get('/api/v1/countries')
      .reply(200, [{ id: 1 }, { id: 2 }])

    return getCountries().then((countries) => {
      expect(countries).toHaveLength(2)
    })
  })
})

describe('addCountry', () => {
  it('add a country from the api', () => {
    nock('http://localhost')
      .post(`/api/v1/countries`)
      .reply(200, { country: 'Italy' })

    return addCountry('Italy').then((res) => {
      expect(res.country).toBe('Italy')
    })
  })
})
