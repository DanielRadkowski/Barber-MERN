import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import styled from 'styled-components';
import { breakpoints } from 'styled-bootstrap-responsive-breakpoints';

const Styles = styled.div`

height: 80vh;


.info-window {
  background: white;
  padding: 3px;
  h1 {
    font-size: 1.5em;
    padding: 0 0 5px;
  }
}

@media(max-width: ${breakpoints.md}) {

  height: 55vh; 
} 

@media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.sm}) {

  //height: 60vh;
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
      {props.isMarkerShown && <Marker position={position} />}

      <InfoWindow
        onLoad={onLoad}
        position={position}
      >
        <div className="info-window">
          <h1>Barber Andrew</h1>
          <h6>Orzechowa 50</h6>
          <h6>50-540 Wrocław</h6>
        </div>
      </InfoWindow>
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function MapContainer() {
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


export default MapContainer;

// 'AIzaSyCwALeLLIErewxUnmbrjoLLaYMHawl7uco'
