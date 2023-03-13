import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <button>
        <Link to="/aboutMe">About Me</Link>
      </button>
      <button>
        <Link to="/country">Travel Log</Link>
      </button>
    </>
  )
}

export default Nav
