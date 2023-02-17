import { DELETE_CITY, SHOW_CITIES, UPDATE_CITY } from '../actions'

export default function citiesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_CITIES:
      return payload
    case DELETE_CITY:
      return payload
    case UPDATE_CITY:
      return payload
    default:
      return state
  }
}
