import { DELETE_CITY, SHOW_CITIES, UPDATE_CITIES } from '../actions'

export default function citiesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_CITIES:
      return payload
    case DELETE_CITY:
      return payload
    case UPDATE_CITIES:
      return payload
    default:
      return state
  }
}
