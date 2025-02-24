import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

class SimpleAreaChart extends Component {
  render() {
    const { width, height, data, dataKey, strokeColor, fillColor, xAxis, yAxis } = this.props;
    return (
      <AreaChart width={width} height={height} data={data}>
        {xAxis ? <XAxis dataKey="name" /> : ''}
        {yAxis ? <YAxis /> : ''}
        <Tooltip />
        <Area type="monotone" dataKey={dataKey} stroke={strokeColor} fill={fillColor} />
      </AreaChart>
    );
  }
}
export default SimpleAreaChart;
