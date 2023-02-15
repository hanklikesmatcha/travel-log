import request from 'superagent'

const rootUrl = '/api/v1/cities'

export function getCountries() {
  return request.get(rootUrl).then((result) => {
    return result.body
  })
}

export function getCitiesByCountryId(countryId) {
  return request.get(rootUrl + countryId).then((res) => {
    res.body
  })
}
