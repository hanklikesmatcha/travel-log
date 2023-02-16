import {
  getCitiesByCountryId,
  getCountries,
  deleteCityCountryId,
  addCityByCountryId,
  addCountry,
} from '../apis/apiCities'

export const SHOW_COUNTRIES = 'SHOW_COUNTRIES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SHOW_CITIES = 'SHOW_CITIES'
export const DELETE_CITY = 'DELETE_CITY'
export const UPDATE_CITIES = 'UPDATE_CITIES'
export const UPDATE_COUNTRY = 'UPDATE_COUNTRY'

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

export function deleteCity(city) {
  return {
    type: DELETE_CITY,
    payload: city,
  }
}

export function deleteCityByCountryId(countryId, cityId) {
  return (dispatch) => {
    deleteCityCountryId(countryId, cityId)
      .then((city) => {
        dispatch(deleteCity(city))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateCities(cities) {
  return {
    type: UPDATE_CITIES,
    payload: cities,
  }
}

export function postCityByCountryId(countryId, newCity) {
  return (dispatch) => {
    addCityByCountryId(countryId, newCity)
      .then((cities) => {
        dispatch(updateCities(cities))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateCountry(country) {
  return {
    type: UPDATE_COUNTRY,
    payload: country,
  }
}

export function postCountry(newCountry) {
  return (dispatch) => {
    addCountry(newCountry)
      .then((country) => {
        dispatch(updateCountry(country))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
