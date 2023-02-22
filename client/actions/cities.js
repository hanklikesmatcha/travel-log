import {
  getCitiesByCountryId,
  deleteCityCountryId,
  addCityByCountryId,
} from '../apis/cities'

export const SHOW_ERROR = 'SHOW_ERROR'
export const SHOW_CITIES = 'SHOW_CITIES'
export const DELETE_CITY = 'DELETE_CITY'
export const ADD_CITIES = 'ADD_CITIES'
export const UPDATE_CITY = 'UPDATE_CITY'

export function showError(errorMessage) {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
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

export function addCities(cities) {
  return {
    type: ADD_CITIES,
    payload: cities,
  }
}

export function postCityByCountryId(countryId, newCity) {
  return (dispatch) => {
    addCityByCountryId(countryId, newCity)
      .then((cities) => {
        dispatch(addCities(cities))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function cityEdited(city) {
  return {
    type: UPDATE_CITY,
    payload: city,
  }
}

export function editCity(id, city) {
  return (dispatch) => {
    editCity(id, city)
      .then((city) => {
        dispatch(cityEdited(city))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
