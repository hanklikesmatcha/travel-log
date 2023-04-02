import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { delCountry, updatedCountry, showCountries } from '../actions/countries'
import AddCountry from './AddCountry'

import Home from './Home'
import Map from './Map'
import { Button, ActionIcon, Input } from '@mantine/core'
import { Trash, Edit } from 'tabler-icons-react'

function Country() {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.countries)

  console.log(countries)

  useEffect(() => {
    dispatch(showCountries())
  }, [dispatch])

  if (!countries || countries.length === 0) {
    return <div>Loading countries...</div>
  }

  const [editingCountry, setEditingCountry] = useState(null)
  const [newCountryName, setNewCountryName] = useState('')

  function startEditing(country) {
    setEditingCountry(country)
    setNewCountryName(country.country)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(updatedCountry(editingCountry.id, { country: newCountryName }))
      .then((updatedCountry) => {
        dispatch(showCountries())
        setEditingCountry(updatedCountry)
        setNewCountryName(updatedCountry.country)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return (
    <div>
      <Home />
      {countries &&
        countries.map((country) => (
          <Button.Group key={country.id}>
            {editingCountry && editingCountry.id === country.id ? (
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="Enter New Country Name"
                  size="xl"
                  name="newCountryName"
                  value={editingCountry ? newCountryName : ''}
                  onChange={(e) => setNewCountryName(e.target.value)}
                  onKeyDown={(e) => setNewCountryName(e.target.value)}
                />
                <Button color="green" compact uppercase type="submit">
                  Save
                </Button>
                <Button
                  color="red"
                  compact
                  uppercase
                  type="button"
                  onClick={() => setEditingCountry(null)}
                >
                  Cancel
                </Button>
              </form>
            ) : (
              <>
                <Link to={`/${country.id}`} className="card-link">
                  <Button variant="default">
                    {country.country.toString()}
                  </Button>
                </Link>
                <ActionIcon>
                  <Edit onClick={() => startEditing(country)} />
                </ActionIcon>
                <ActionIcon>
                  <Trash onClick={() => dispatch(delCountry(country.id))} />
                </ActionIcon>
              </>
            )}
          </Button.Group>
        ))}
      <AddCountry />
      <Map />
    </div>
  )
}

export default Country
