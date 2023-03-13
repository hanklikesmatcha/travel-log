import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { createStyles } from '@mantine/core'

import Country from './Country'
import Cities from './Cities'
import Footer from './Footer'
import Home from './Home'
import { showCountries } from '../actions/countries'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showCountries())
  }, [])

  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Country />} />
        <Route path="/:countryId" element={<Cities />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
