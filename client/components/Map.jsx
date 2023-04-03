import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

class Map extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyBCnAamP00Dp816d1JRqTtUPPAkRGAQtqk">
        <GoogleMap
          id="example-map"
          mapContainerStyle={{
            height: '800px',
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
