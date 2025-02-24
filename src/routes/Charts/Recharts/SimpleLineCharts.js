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

class SimpleLineCharts extends Component {
  render() {
    const { data, height, colors } = this.props;

    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            dt={+new Date()}
          >
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke={colors[0]} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke={colors[1]} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default SimpleLineCharts;
