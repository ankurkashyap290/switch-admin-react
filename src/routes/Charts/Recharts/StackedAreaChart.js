import React, { Component } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  AreaChart,
  ResponsiveContainer,
} from 'recharts';

class StackedAreaChart extends Component {
  render() {
    const { data, height, colors } = this.props;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" stroke={colors[3]} />
            <YAxis stroke={colors[3]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke={colors[0]} fill={colors[0]} />
            <Area type="monotone" dataKey="pv" stackId="1" stroke={colors[1]} fill={colors[1]} />
            <Area type="monotone" dataKey="amt" stackId="1" stroke={colors[2]} fill={colors[2]} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default StackedAreaChart;
