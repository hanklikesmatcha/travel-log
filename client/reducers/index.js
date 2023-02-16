import { combineReducers } from 'redux'

import countries from './countries'
import cities from './cities'

export default combineReducers({
  countries,
  cities,
})
