import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Grid } from '@mantine/core'

function Nav() {
  return (
    <>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Link
          to="/aboutMe"
          style={{ textDecoration: 'none', textTransform: 'uppercase' }}
        >
          About Me
        </Link>
      </Button>
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Link
          to="/country"
          style={{ textDecoration: 'none', textTransform: 'uppercase' }}
        >
          Travel Log
        </Link>
      </Button>
    </>
  )
}

export default Nav
