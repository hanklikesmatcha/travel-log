import { SHOW_COUNTRIES, UPDATE_COUNTRY } from '../actions'

export default function countriesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_COUNTRIES:
      return payload
    case UPDATE_COUNTRY:
      return payload
    default:
      return state
  }
}
