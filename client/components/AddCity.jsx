import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCityByCountryId } from '../actions'

import { Button } from '@mantine/core'

function AddCity() {
  const { countryId } = useParams()
  const [newCity, setNewCity] = useState({
    city: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewCity({
      ...newCity,
      [name]: value,
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const city = { ...newCity }
    dispatch(postCityByCountryId(countryId, city))
    setNewCity({
      city: '',
    })
  }

  const { city } = newCity

  return (
    <>
      <h1>Where else have you been?</h1>
      <label htmlFor="city">City Name: </label>
      <input name="city" value={city || ''} onChange={handleChange} />
      <Button color="green" compact uppercase onClick={handleAdd}>
        Enter New City
      </Button>
    </>
  )
}

export default AddCity
