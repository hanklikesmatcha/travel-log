import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  deleteCityByCountryId,
  fetchCountryCity,
  editCity,
} from '../actions/cities'

import AddCity from './AddCity'
import Nav from './Nav'
import { ActionIcon, createStyles, useMantineTheme } from '@mantine/core'
import { Edit, Trash } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  header: {
    fontFamily: 'Bayon, sans-serif',
  },

  para: {
    fontFamily: 'Monaco, Courier, monospace',
  },
  container: {
    backgroundColor: '#BAC8FF',
    minHeight: '100vh',
    padding: theme.spacing.xl,
  },
  editForm: {
    display: 'flex',
    alignItems: 'center',
  },
}))

function Cities() {
  const dispatch = useDispatch()
  const cities = useSelector((state) => state.cities)
  const { countryId } = useParams()
  const [editedCity, setEditedCity] = useState(null)
  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

  useEffect(() => {
    dispatch(fetchCountryCity(countryId))
  }, [])

  function handleDelete(cityId) {
    dispatch(deleteCityByCountryId(countryId, cityId))
  }

  function handleEdit(city) {
    setEditedCity(city)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(editCity(editedCity.id, editedCity.city))
    setEditedCity(null)
  }

  function handleChange(event) {
    setEditedCity({ ...editedCity, city: event.target.value })
  }
  return (
    <div className={classes.container}>
      <Nav />
      <h1 className={classes.header}>Which cities have you been to?</h1>
      {cities &&
        cities?.map((city, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {editedCity?.id === city.id ? (
              <form onSubmit={handleSubmit} className={classes.editForm}>
                <input
                  type="text"
                  value={editedCity.city}
                  onChange={handleChange}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <h3 style={{ marginRight: '10px' }} className={classes.header}>
                  {city.city}
                </h3>
                <ActionIcon>
                  <Trash onClick={() => handleDelete(city.id)} />
                </ActionIcon>
                <ActionIcon>
                  <Edit onClick={() => handleEdit(city)} />
                </ActionIcon>
              </>
            )}
          </div>
        ))}
      <AddCity />
    </div>
  )
}

function CityInfo({ id, city, handleDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h3 style={{ marginRight: '10px' }}>{city}</h3>
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
