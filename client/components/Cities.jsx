import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCityByCountryId, fetchCountryCity } from '../actions/cities'

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
}))

function Cities() {
  const dispatch = useDispatch()
  const cities = useSelector((state) => state.cities)
  const { countryId } = useParams()

  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

  useEffect(() => {
    dispatch(fetchCountryCity(countryId))
  }, [])

  function handleDelete(cityId) {
    dispatch(deleteCityByCountryId(countryId, cityId))
  }

  return (
    <div className={classes.container}>
      <Nav />
      <h1 className={classes.header}>Which cities have you been to?</h1>
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
