import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry } from '../actions/countries'
import AddCountry from './AddCountry'

import { CloseButton } from '@mantine/core'

function Country() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  function handleDelete(id) {
    dispatch(delCountry(id))
  }

  return (
    <div>
      <h2>
        {countries &&
          countries.map((country) => (
            <Link to={`/${country.id}`} key={country.id}>
              <button>{country.country}</button>
              <CountryInfo
                key={country.id}
                id={country.id}
                handleDelete={handleDelete}
              />
            </Link>
          ))}
      </h2>
      <AddCountry />
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
