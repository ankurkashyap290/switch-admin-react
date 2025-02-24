import React, { Component } from 'react';
import { BarChart, Bar } from 'recharts';

class SimpleBarCharts extends Component {
  render() {
    const { width, height, data, dataKey, fillColor } = this.props;
    return (
      <BarChart width={width} height={height} data={data}>
        <Bar dataKey={dataKey} fill={fillColor} />
      </BarChart>
    );
  }
}
export default SimpleBarCharts;
