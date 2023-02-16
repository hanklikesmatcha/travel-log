import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCityByCountryId, fetchCountryCity } from '../actions'

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
      <h3>Which cities have you been to?</h3>
      {cities &&
        cities?.map((city, i) => (
          <CityInfo
            key={i}
            id={city.id}
            city={city.city}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  )
}

function CityInfo({ id, city, handleDelete }) {
  return (
    <div>
      <h1>{city}</h1>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default Cities
