import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Country from './Country'
import Cities from './Cities'
import Me from './AboutMe'

import { showCountries } from '../actions/countries'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showCountries())
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/country" element={<Country />} />
        <Route path="/:countryId" element={<Cities />} />
      </Routes>
    </>
  )
}

export default App
