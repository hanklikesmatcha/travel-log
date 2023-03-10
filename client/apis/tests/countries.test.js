import nock from 'nock'

import { addCountry, getCountries, updateCountry } from '../countries'

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

describe('updateCountry', () => {
  it('updates a country', () => {
    const scope = nock('http://localhost')
      .patch('/api/v1/countries/1')
      .reply(200, { id: 1, country: 'Italy' })
    return updateCountry(1).then((res) => {
      expect(res.country).toBe('Italy')
      expect(scope.isDone()).toBe(true)
    })
  })
})
