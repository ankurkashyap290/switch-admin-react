import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

class SimpleLineChart extends Component {
  render() {
    const { width, height, data, dataKey, strokeColor, strokeWidth } = this.props;
    return (
      <LineChart width={width} height={height} data={data}>
        <Line type="monotone" dataKey={dataKey} stroke={strokeColor} strokeWidth={strokeWidth} />
      </LineChart>
    );
  }
}
export default SimpleLineChart;
