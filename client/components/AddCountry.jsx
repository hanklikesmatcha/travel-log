import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCountry } from '../actions/countries'

import { Button, Input, createStyles, useMantineTheme } from '@mantine/core'

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

function AddCountry() {
  const [country, setCountry] = useState('')

  const dispatch = useDispatch()

  const theme = useMantineTheme()
  const { classes } = useStyles({ theme })

  function handleChange(event) {
    setCountry(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addNewCountry(country))
    setCountry('')
  }

  return (
    <>
      <h2 className={classes.header}>Where else have you been?</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'inline-flex', alignItems: 'center' }}
      >
        <Input
          placeholder="Enter New Country"
          size="large"
          name="country"
          value={country}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <br />
        <Button color="green" compact uppercase type="submit">
          Enter New Country
        </Button>
      </form>
    </>
  )
}

export default AddCountry
