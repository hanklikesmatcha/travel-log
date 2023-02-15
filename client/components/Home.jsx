import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const countries = useSelector((state) => state.countries)
  return (
    <>
      {countries.map((country) => (
        <Link to={`/${country.id}`} key={country.id}>
          <button>{country.country}</button>
        </Link>
      ))}
    </>
  )
}

export default Home
