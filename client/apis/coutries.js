import request from 'superagent'

export function getCountries() {
  return request.get('/api/v1/countries').then((result) => {
    return result.body
  })
}

export function addCountry(name) {
  return request
    .post(`/api/v1/cities`)
    .send({ name })
    .then((res) => res.body)
}
