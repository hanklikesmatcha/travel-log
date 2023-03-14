import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry } from '../actions/countries'
import AddCountry from './AddCountry'

import Home from './Home'
import Map from './Map'
import { CloseButton, Button } from '@mantine/core'

function Country() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  function handleDelete(id) {
    dispatch(delCountry(id))
  }

  return (
    <div>
      <Home />
      <h2>
        {countries &&
          countries.map((country) => (
            <Link to={`/${country.id}`} key={country.id}>
              <Button.Group>
                <Button variant="default">{country.country}</Button>
                <CountryInfo
                  key={country.id}
                  id={country.id}
                  handleDelete={handleDelete}
                />
              </Button.Group>
            </Link>
          ))}
      </h2>
      <AddCountry />
      <Map />
    </div>
  )
}

function CountryInfo({ id, handleDelete }) {
  return (
    <div>
      <CloseButton size="xl" iconSize={20} onClick={() => handleDelete(id)} />
    </div>
  )
}

export default Country
