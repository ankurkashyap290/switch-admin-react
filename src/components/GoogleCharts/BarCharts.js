import React, { Component } from 'react';
import Charts from 'react-google-charts';
import GoogleChartResponsive from '../Misc/GoogleChartResponsive';

class BarCharts extends Component {
  render() {
    const { data, options, loader, rootProps } = this.props;
    return (
      <GoogleChartResponsive style={{ width: '100%', height: '300px' }}>
        <Charts
          chartType="Bar"
          loader={loader}
          data={data}
          options={options}
          rootProps={rootProps}
        />
      </GoogleChartResponsive>
    );
  }
}
export default BarCharts;
