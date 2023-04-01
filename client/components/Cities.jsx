import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCityByCountryId, fetchCountryCity } from '../actions/cities'

import AddCity from './AddCity'
import Nav from './Nav'
import { ActionIcon } from '@mantine/core'
import { Edit, Trash } from 'tabler-icons-react'

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
      <Nav />
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
      <ActionIcon>
        <Trash size="xl" iconSize={20} onClick={() => handleDelete(id)} />
      </ActionIcon>
      <ActionIcon>
        <Edit />
      </ActionIcon>
    </div>
  )
}

export default Cities
