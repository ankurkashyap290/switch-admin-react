import React from 'react';
import clusterMapData from './mapData.json';
import { MapMarkerClusterer } from './MapMarkerCluster';

class GoogleMapMarkerClusterer extends React.Component {
  state = {
    markers: [],
    randomClick: 0,
  };

  componentWillMount() {
    this.setState({ markers: [], randomClick: 0 });
  }

  componentDidMount() {
    // const url = [
    //   // Length issue
    //   `https://gist.githubusercontent.com`,
    //   `/farrrr/dfda7dd7fccfec5474d3`,
    //   `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    // ].join("");

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({ markers: data.photos });
    //   });
    this.setState({ markers: clusterMapData });
  }

  onMarkerClick = marker => {
    const { markers } = this.state;
    const found = markers.findIndex(elem => {
      return elem.photo_id === marker.photo_id;
    });
    if (found >= 0) {
      const isOpen = markers[found].isOpen || false;
      markers[found].isOpen = !isOpen;
      this.setState({ markers, randomClick: new Date().getTime() });
      //   console.log(JSON.stringify(marker, null, 2));
    }
  };

  render() {
    const { markers, randomClick } = this.state;
    return (
      <MapMarkerClusterer
        markers={markers}
        randomClick={randomClick}
        onMarkerClick={this.onMarkerClick}
      />
    );
  }
}

export default GoogleMapMarkerClusterer;
