import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCountry } from '../actions'

function AddCountry() {
  const [newCountry, setNewCountry] = useState({
    city: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewCountry({
      ...newCountry,
      [name]: value,
    })
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const newCountry = { ...newCountry }
    dispatch(postCountry(newCountry))
    setNewCountry({
      country: '',
    })
  }

  const { country } = newCountry

  return (
    <>
      <h1>Where else have you been?</h1>
      <label htmlFor="city">Country Name: </label>
      <input name="city" value={country || ''} onChange={handleChange} />
      <button onClick={handleAdd}>Enter New Country</button>
    </>
  )
}

export default AddCountry
