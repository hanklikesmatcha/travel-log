import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCityByCountryId } from '../actions/cities'

import { Button, Input, createStyles, useMantineTheme } from '@mantine/core'
import GoBack from './GoBack'

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

function AddCity() {
  const { countryId } = useParams()
  const [newCity, setNewCity] = useState({
    city: '',
  })

  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

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
      <h2 className={classes.header}>Where else have you been?</h2>
      <form
        onSubmit={handleAdd}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <Input
          placeholder="Enter New City"
          size="large"
          name="city"
          value={city || ''}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <br />
        <Button color="green" compact uppercase onClick={handleAdd}>
          Enter New City
        </Button>
      </form>
      <p></p>
      <GoBack />
    </>
  )
}

export default AddCity
