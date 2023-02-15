import { SHOW_CITIES } from '../actions'

export default function citiesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_CITIES:
      return payload
    default:
      return state
  }
}
