import request from 'superagent'

export function getCitiesByCountryId(countryId) {
  return request.get(`api/v1/cities/${countryId}`).then((res) => res.body)
}

export function deleteCityCountryId(countryId, cityId) {
  return request
    .delete(`/api/v1/cities/${countryId}/${cityId}`)
    .then((res) => res.body)
}

export function addCityByCountryId(countryId, newCity) {
  return request
    .post(`/api/v1/cities/${countryId}/new`)
    .send(newCity)
    .then((res) => res.body)
}

export function editCityByCountryId(countryId, city) {
  return request
    .patch(`api/v1/cities/${countryId}`)
    .send({ city })
    .then((res) => res.body)
}
