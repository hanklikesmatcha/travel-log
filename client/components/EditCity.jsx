import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editCity } from '../actions/cities'

import { Text, ActionIcon, Input } from '@mantine/core'
import { IconEdit, IconX } from '@tabler/icons'

function City({ city }) {
  const [editedCity, setEditedCity] = useState(city.name)
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()

  return (
    <Text key={city.id} fz="lg">
      <ActionIcon>
        <IconEdit
          size={20}
          color="#fab005"
          onClick={() => setIsEditing(!isEditing)}
        />
      </ActionIcon>

      {isEditing ? (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(editCity(city.id, editedCity))
            setIsEditing(false)
          }}
        >
          <Input
            radius="xl"
            placeholder={city.name}
            value={editedCity}
            onChange={(event) => {
              setEditedCity(event.target.value)
            }}
          />
        </form>
      ) : (
        city.name
      )}
    </Text>
  )
}

export default City
