import {
  DELETE_CITY,
  SHOW_CITIES,
  UPDATE_CITY,
  ADD_CITIES,
} from '../actions/cities'

export default function citiesReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_CITIES:
      return payload
    case DELETE_CITY:
      return payload
    case ADD_CITIES:
      return payload
    case UPDATE_CITY:
      return state.map((city) => (city.id === payload.id ? payload : city))
    default:
      return state
  }
}
