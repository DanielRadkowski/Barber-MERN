import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';
import Address from './Address';
import scissors from '../../pictures/red-scissors.png';

const Styles = styled.div`

@media (min-width: ${breakpoints.xs}) {

  height: 60vh;
}

@media(min-width: ${breakpoints.sm}) {

  height: 55vh; 
} 

@media(min-width: ${breakpoints.md}) {

  height: 80vh; 
} 
`
const position = { lat: 51.078640, lng: 17.043759 };

const onLoad = infoWindow => {
  console.log('infoWindow: ', infoWindow)
}


function Map(props) {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={position}
    >
      {props.isMarkerShown &&
        <Marker
          position={position}
          icon={{ url: scissors, scaledSize: new window.google.maps.Size(30, 30) }}
        />}

      <InfoWindow
        onLoad={onLoad}
        position={position}
      >
        <Address />
      </InfoWindow>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapContainer() {
  return (
    <Styles className="px-lg-5 py-5 w-100">
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places
        &key=AIzaSyCwALeLLIErewxUnmbrjoLLaYMHawl7uco"
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </Styles>
  );
}

// 'AIzaSyCwALeLLIErewxUnmbrjoLLaYMHawl7uco'
