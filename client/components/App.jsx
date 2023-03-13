import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { createStyles } from '@mantine/core'

import Country from './Country'
import Cities from './Cities'
import Nav from './Nav'
import Me from './AboutMe'

import { showCountries } from '../actions/countries'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showCountries())
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/aboutMe" element={<Me />} />
        <Route path="/country" element={<Country />} />
        <Route path="/:countryId" element={<Cities />} />
      </Routes>
    </>
  )
}

export default App
