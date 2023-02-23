import { getCountries, addCountry, deleteCountry } from '../apis/coutries'

export const SHOW_COUNTRIES = 'SHOW_COUNTRIES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const DELETE_COUNTRY = 'DELETE_COUNTRY'

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

export function countryAdded(country) {
  return {
    type: ADD_COUNTRY,
    payload: country,
  }
}

export function addNewCountry(countryName) {
  return (dispatch) => {
    addCountry(countryName)
      .then((countryName) => dispatch(receiveCountries(countryName)))
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function countryDeleted(id) {
  return {
    type: DELETE_COUNTRY,
    payload: id,
  }
}

export function delCountry(id) {
  return (dispatch) => {
    deleteCountry(id)
      .then(() => {
        dispatch(countryDeleted(id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
