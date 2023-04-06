import {
  getCountries,
  addCountry,
  deleteCountry,
  updateCountry,
} from '../apis/countries'

export const SHOW_COUNTRIES = 'SHOW_COUNTRIES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const DELETE_COUNTRY = 'DELETE_COUNTRY'
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
    return getCountries().then((countries) => {
      dispatch(receiveCountries(countries))
    })
  }
}

export function countryAdded(country) {
  return {
    type: ADD_COUNTRY,
    payload: country,
  }
}

export function addNewCountry(country) {
  return (dispatch) => {
    return addCountry(country).then((country) => {
      dispatch(countryAdded(country))
    })
  }
}

export function countryDeleted(countryId) {
  return {
    type: DELETE_COUNTRY,
    payload: countryId,
  }
}

export function delCountry(countryId) {
  return (dispatch) => {
    return deleteCountry(countryId).then(() => {
      dispatch(countryDeleted(countryId))
    })
  }
}

export function countryUpdate(updatedCountry) {
  return {
    type: UPDATE_COUNTRY,
    payload: updatedCountry,
  }
}

export function updatedCountry(countryId, updatedCountry) {
  return (dispatch) => {
    return updateCountry(countryId, updatedCountry).then((country) => {
      dispatch(countryUpdate(country))
    })
  }
}
