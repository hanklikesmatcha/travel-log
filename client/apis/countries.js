import request from 'superagent'

export function getCountries() {
  return request.get('/api/v1/countries').then((result) => {
    return result.body
  })
}

export function addCountry(country) {
  return request
    .post(`/api/v1/countries`)
    .send({ country })
    .then((res) => res.body)
}

export function deleteCountry(countryId) {
  return request.del(`/api/v1/countries/${countryId}`).then((res) => {
    res.body
  })
}

export function updateCountry(countryId, updatedcountry) {
  return request
    .patch(`/api/v1/countries/${countryId}`)
    .send({ updatedcountry })
    .then((res) => res.body)
}
