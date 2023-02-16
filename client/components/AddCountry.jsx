import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCountry } from '../actions'

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
      <label htmlFor="country">Country Name: </label>
      <input name="country" value={country || ''} onChange={handleChange} />
      <button onClick={handleSubmit}>Enter New Country</button>
    </>
  )
}

export default AddCountry
