import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry, updatedCountry } from '../actions/countries'
import AddCountry from './AddCountry'

import Home from './Home'
import Map from './Map'
import { Button, ActionIcon, Input } from '@mantine/core'
import { Trash, Edit } from 'tabler-icons-react'

function Country({ country }) {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  const [editedCountry, setEditedCountry] = useState(country.country)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <Home />
      {countries &&
        countries.map((country) => (
          <Button.Group key={country.id}>
            <Link to={`/${country.id}`} key={country.id}>
              <Button variant="default">{country.country}</Button>
            </Link>
            <ActionIcon>
              <Trash onClick={() => dispatch(delCountry(country.id))} />
            </ActionIcon>
            <ActionIcon>
              <Edit onClick={() => setIsEditing(!isEditing)} />
            </ActionIcon>

            {isEditing ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  dispatch(updatedCountry(country.id, editedCountry))
                  setIsEditing(false)
                }}
              >
                <Input
                  placeholder={country.country}
                  value={editedCountry}
                  onChange={(e) => {
                    setEditedCountry(e.target.value)
                  }}
                />
              </form>
            ) : (
              country.country
            )}
          </Button.Group>
        ))}
      <AddCountry />
      <Map />
    </div>
  )
}

export default Country
