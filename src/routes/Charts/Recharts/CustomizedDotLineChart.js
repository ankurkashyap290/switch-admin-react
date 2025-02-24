import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

class CustomizedDotLineChart extends Component {
  render() {
    const { data, width, height, colors } = this.props;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <LineChart
            width={width}
            height={height}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke={colors[0]} dot={<CustomizedDot />} />
            <Line type="monotone" dataKey="uv" stroke={colors[1]} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default CustomizedDotLineChart;

const CustomizedDot = props => {
  const { cx, cy, payload } = props;
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={20}
      height={20}
      fill={payload.fillColor}
      viewBox="0 0 1024 1024"
    >
      <path d={payload.svg} />
    </svg>
  );
};
