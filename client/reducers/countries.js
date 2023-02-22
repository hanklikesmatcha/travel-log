import { ADD_COUNTRY, SHOW_COUNTRIES } from '../actions/countries'

export default function countriesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_COUNTRIES:
      return payload
    case ADD_COUNTRY:
      return payload
    default:
      return state
  }
}
