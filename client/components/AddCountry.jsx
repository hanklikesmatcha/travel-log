import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCountry } from '../actions'

import { Button, Input } from '@mantine/core'

function AddCountry() {
  const [country, setCountry] = useState('')

  const dispatch = useDispatch()

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
      <h1>Where else have you been?</h1>
      <Input
        placeholder="Enter New City"
        size="xl"
        name="country"
        value={country || ''}
        onChange={handleChange}
      />
      <br />
      <Button color="green" compact uppercase onClick={handleSubmit}>
        Enter New Country
      </Button>
    </>
  )
}

export default AddCountry
