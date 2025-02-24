import React from 'react';
import { Tabs } from 'antd';
import _ from 'lodash';
import { compose, withProps, withStateHandlers, withHandlers, lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
  StreetViewPanorama,
  OverlayView,
} from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox';
import ComponentDemoLayout from '../../layouts/pageLayouts/ComponentDemoLayout';
import infoboxStyles from './infoboxStyles.json';
import IntlMessages from '../../components/Misc/intlMessages';
import GoogleMapMarkerClusterer from './GoogleMapMarkerClusterer';

const googleApiKey = 'AIzaSyAGNFQ6OYIEGeozYXdMKvSIujulaJt3RG4';
const { TabPane } = Tabs;

class GoogleMaps extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<GoogleMap/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Styled Infobox" key="1">
            <GoogleMapStyledInfobox />
          </TabPane>
          <TabPane tab="Marker Clusterer" key="2">
            <GoogleMapMarkerClusterer />
          </TabPane>
          <TabPane tab="Directions Renderer" key="3">
            <GoogleMapDirectionsRenderer />
          </TabPane>
          <TabPane tab="SearchBox" key="4">
            <GoogleMapSearchBox />
          </TabPane>
          <TabPane tab="Street View Panorama" key="5">
            <GoogleMapStreetViewPanorama />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default GoogleMaps;

const GoogleMapStyledInfobox = compose(
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

export const MapWithAMarkerClusterer = compose(
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

const GoogleMapDirectionsRenderer = compose(
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

const GoogleMapSearchBox = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        bounds: null,
        center: {
          lat: 40.704937,
          lng: -74.00176,
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          });
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new window.google.maps.LatLngBounds();
          const { center } = this.state;
          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Customized your placeholder"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    {props.markers.map(marker => (
      <Marker key={new Date()} position={marker.position} />
    ))}
  </GoogleMap>
));

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
});

const GoogleMapStreetViewPanorama = compose(
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
