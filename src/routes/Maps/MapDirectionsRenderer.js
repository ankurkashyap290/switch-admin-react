import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';

const googleApiKey = 'AIzaSyAGNFQ6OYIEGeozYXdMKvSIujulaJt3RG4';

export const GoogleMapDirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(40.704937, -74.00176),
          destination: new window.google.maps.LatLng(40.696581, -73.997775),
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    },
  })
)(props => (
  <GoogleMap defaultZoom={7} defaultCenter={new window.google.maps.LatLng(40.704937, -74.00176)}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));
