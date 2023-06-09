import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

function GoBack() {
  return (
    <>
      <Button color="yellow" compact uppercase>
        <Link
          to={'/country'}
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Go back to country list
        </Link>
      </Button>
    </>
  )
}

export default GoBack
