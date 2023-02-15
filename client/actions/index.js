import { getCitiesByCountryId, getCountries } from '../apis/apiCities'

export const SHOW_COUNTRIES = 'SHOW_COUNTRIES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SHOW_CITIES = 'SHOW_CITIES'

export function receiveCountries(countries) {
  return {
    type: SHOW_COUNTRIES,
    payload: countries,
  }
}

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function showCountries() {
  return (dispatch) => {
    return getCountries()
      .then((countries) => {
        dispatch(receiveCountries(countries))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function receiveCities(cities) {
  return {
    type: SHOW_CITIES,
    payload: cities,
  }
}

export function fetchCountryCity(countryId) {
  return (dispatch) => {
    getCitiesByCountryId(countryId)
      .then((cities) => {
        dispatch(receiveCities(cities))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
