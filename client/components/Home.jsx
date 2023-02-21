import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AddCountry from './AddCountry'

function Home() {
  const countries = useSelector((state) => state.countries)
  return (
    <div>
      <h2>
        {countries.map((country) => (
          <Link to={`/${country.id}`} key={country.id}>
            <button>{country.country}</button>
          </Link>
        ))}
      </h2>
      <AddCountry />
    </div>
  )
}

export default Home
