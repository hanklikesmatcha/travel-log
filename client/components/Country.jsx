import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry } from '../actions/countries'
import AddCountry from './AddCountry'

import Home from './Home'
import Map from './Map'
import { Button, ActionIcon } from '@mantine/core'
import { Trash } from 'tabler-icons-react'

function Country() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  return (
    <div>
      <Home />
      <h2>
        {countries &&
          countries.map((country) => (
            <Button.Group key={country.id}>
              <Link to={`/${country.id}`} key={country.id}>
                <Button variant="default">{country.country}</Button>
              </Link>
              <ActionIcon>
                <Trash onClick={() => dispatch(delCountry(country.id))} />
              </ActionIcon>
            </Button.Group>
          ))}
      </h2>
      <AddCountry />
      <Map />
    </div>
  )
}

export default Country
