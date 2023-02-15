import { SHOW_COUNTRIES } from '../actions'

export default function countriesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_COUNTRIES:
      return payload
    default:
      return state
  }
}
