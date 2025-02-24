import React, { Component } from 'react';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Area,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';

class LineBarAreaComposedChart extends Component {
  render() {
    const { data, height, colors } = this.props;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="amt" fill={colors[0]} stroke={colors[0]} />
            <Bar dataKey="pv" barSize={20} fill={colors[1]} />
            <Line type="monotone" dataKey="uv" stroke={colors[3]} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default LineBarAreaComposedChart;
