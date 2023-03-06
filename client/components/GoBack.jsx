import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

function GoBack() {
  return (
    <>
      <Button Button color="green" compact uppercase>
        <Link to={'/'}>Go back to main page</Link>
      </Button>
    </>
  )
}

export default GoBack
