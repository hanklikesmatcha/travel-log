import request from 'superagent'

export function getCountries() {
  return request.get('/api/v1/cities').then((result) => {
    return result.body
  })
}

export function getCitiesByCountryId(countryId) {
  return request.get(`api/v1/cities/${countryId}`).then((res) => res.body)
}

export function deleteCityCountryId(countryId, cityId) {
  return request
    .delete(`/api/v1/cities/${countryId}/${cityId}`)
    .then((res) => res.body)
}
