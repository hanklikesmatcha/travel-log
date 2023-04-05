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
      return {
        ...state,
        [action.payload.countryId]: state[action.payload.countryId].map(
          (city) =>
            city.id === action.payload.cityId
              ? { ...city, city: action.payload.updatedCityName }
              : city
        ),
      }
    default:
      return state
  }
}
