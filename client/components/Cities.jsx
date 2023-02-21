import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCityByCountryId, fetchCountryCity } from '../actions'

import AddCity from './AddCity'

import { CloseButton } from '@mantine/core'

function Cities() {
  const dispatch = useDispatch()
  const cities = useSelector((state) => state.cities)
  const { countryId } = useParams()

  useEffect(() => {
    dispatch(fetchCountryCity(countryId))
  }, [])

  function handleDelete(cityId) {
    dispatch(deleteCityByCountryId(countryId, cityId))
  }

  return (
    <div>
      <h1>Which cities have you been to?</h1>
      {cities &&
        cities?.map((city, i) => (
          <CityInfo
            key={i}
            id={city.id}
            city={city.city}
            handleDelete={handleDelete}
          />
        ))}
      <AddCity />
    </div>
  )
}

function CityInfo({ id, city, handleDelete }) {
  return (
    <div>
      <h3>{city}</h3>
      <CloseButton size="xl" iconSize={20} onClick={() => handleDelete(id)} />
      {/* Delete
      </CloseButton> */}
    </div>
  )
}

export default Cities
