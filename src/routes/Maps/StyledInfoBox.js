import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import infoboxStyles from './infoboxStyles.json';
import IntlMessages from '../../components/Misc/intlMessages';

const googleApiKey = 'AIzaSyAGNFQ6OYIEGeozYXdMKvSIujulaJt3RG4';

export const GoogleMapStyledInfobox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 40.712775, lng: -74.005973 },
  }),
  withStateHandlers(
    () => ({
      isOpen: false,
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={props.center}
    defaultOptions={{ styles: infoboxStyles }}
  >
    <InfoBox
      defaultPosition={new window.google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          <IntlMessages id="map.yellow.infobox" />
        </div>
      </div>
    </InfoBox>
    <Marker position={{ lat: 40.715485, lng: -74.009271 }} onClick={props.onToggleOpen}>
      {props.isOpen && (
        <InfoBox
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
          <div
            style={{
              backgroundColor: `red`,
              opacity: 0.75,
              padding: `12px`,
            }}
          >
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
              <IntlMessages id="map.red.infobox" />
            </div>
          </div>
        </InfoBox>
      )}
    </Marker>
  </GoogleMap>
));
