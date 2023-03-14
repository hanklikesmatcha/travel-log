import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="process.env.apiKey">
        <GoogleMap
          id="example-map"
          mapContainerStyle={{
            height: '400px',
            width: '100%',
          }}
          zoom={8}
          center={{ lat: -36.8509, lng: 174.7645 }}
        />
      </LoadScript>
    )
  }
}

export default Map
