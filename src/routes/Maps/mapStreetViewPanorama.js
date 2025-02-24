import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView,
} from 'react-google-maps';
import IntlMessages from '../../components/Misc/intlMessages';

const googleApiKey = 'AIzaSyAGNFQ6OYIEGeozYXdMKvSIujulaJt3RG4';
const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

export const GoogleMapStreetViewPanorama = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: {
      lat: 40.696581,
      lng: -73.997775,
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={props.center}>
    <StreetViewPanorama defaultPosition={props.center} visible>
      <OverlayView
        position={{
          lat: 40.696581,
          lng: -73.997775,
        }}
        mapPaneName={OverlayView.OVERLAY_LAYER}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <div
          style={{
            background: `red`,
            color: `white`,
            padding: 5,
            borderRadius: `50%`,
          }}
        >
          <IntlMessages id="map.overlayView" />
        </div>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
));
