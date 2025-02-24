import React from 'react';
import { compose, withProps, withHandlers } from 'recompose';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const googleApiKey = 'AIzaSyAGNFQ6OYIEGeozYXdMKvSIujulaJt3RG4';

export const MapMarkerClusterer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={6} defaultCenter={{ lat: 40.970106, lng: -75.126133 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          marker={marker}
          onClick={() => {
            return props.onMarkerClick(marker);
          }}
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        >
          {marker.isOpen ? (
            <InfoWindow
              onCloseClick={() => {
                return props.onMarkerClick(marker);
              }}
            >
              <div>
                <div>{marker.photo_title}</div>
                <img src={marker.photo_file_url} alt="" />
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </MarkerClusterer>
  </GoogleMap>
));
