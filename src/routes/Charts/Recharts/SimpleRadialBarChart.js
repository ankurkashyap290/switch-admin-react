import React, { Component } from 'react';

import { Legend, RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

class SimpleRadialBarChart extends Component {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer height={300} width="100%">
        <RadialBarChart innerRadius="40%" outerRadius="100%" barSize={10} data={data}>
          <RadialBar minAngle={15} label background clockWise dataKey="uv" />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              top: 0,
              left: 0,
              lineHeight: '24px',
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
export default SimpleRadialBarChart;
