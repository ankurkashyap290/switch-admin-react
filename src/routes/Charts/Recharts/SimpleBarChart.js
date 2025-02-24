import React, { Component } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';

class SimpleBarChart extends Component {
  render() {
    const { data, height, colors } = this.props;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill={colors[0]} />
            <Bar dataKey="uv" fill={colors[1]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default SimpleBarChart;
