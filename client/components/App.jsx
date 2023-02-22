import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Center } from '@mantine/core'

import Home from './Home'
import Cities from './Cities'
import Footer from './Footer'

import { showCountries } from '../actions/countries'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showCountries())
  }, [])

  return (
    <>
      <Center style={{ width: 1400, height: 500 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryId" element={<Cities />} />
        </Routes>
      </Center>
      <Center style={{ width: 1400, height: 100 }}>
        <Footer />
      </Center>
    </>
  )
}

export default App
