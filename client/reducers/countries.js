import {
  ADD_COUNTRY,
  SHOW_COUNTRIES,
  DELETE_COUNTRY,
  UPDATE_COUNTRY,
} from '../actions/countries'

export default function countriesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_COUNTRIES:
      return payload
    case ADD_COUNTRY:
      return payload
    case DELETE_COUNTRY:
      return state.filter((country) => country.id !== payload)
    case UPDATE_COUNTRY:
      return state.map((country) =>
        country.id === payload.id ? payload : country
      )
    default:
      return state
  }
}
