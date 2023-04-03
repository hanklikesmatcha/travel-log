import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Center } from '@mantine/core'

function Nav() {
  return (
    <>
      <Center style={{ marginTop: 20 }}>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          size="xl"
          style={{ marginRight: '10px' }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'white',
            }}
          >
            About Me
          </Link>
        </Button>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          size="xl"
          style={{ marginLeft: '10px' }}
        >
          <Link
            to="/country"
            style={{
              textDecoration: 'none',
              textTransform: 'uppercase',
              color: 'white',
            }}
          >
            Travel Log
          </Link>
        </Button>
      </Center>
    </>
  )
}

export default Nav
