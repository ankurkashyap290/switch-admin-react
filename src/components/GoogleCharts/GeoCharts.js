import React, { Component } from 'react';
import Charts from 'react-google-charts';
import GoogleChartResponsive from '../Misc/GoogleChartResponsive';

class GeoCharts extends Component {
  render() {
    const { data, mapsApiKey, rootProps } = this.props;
    return (
      <GoogleChartResponsive style={{ width: '100%', height: '300px' }}>
        <Charts
          options={{}}
          chartType="GeoChart"
          data={data}
          mapsApiKey={mapsApiKey}
          rootProps={rootProps}
        />
      </GoogleChartResponsive>
    );
  }
}
export default GeoCharts;
