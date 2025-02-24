import React, { Component } from 'react';

import {
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

class SpecifiedDomainRadarChart extends Component {
  render() {
    const { data, height, colors, angle, domain, outerRadius } = this.props;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <RadarChart outerRadius={outerRadius} data={data}>
            <Radar name="Mike" dataKey="A" stroke={colors[0]} fill={colors[0]} fillOpacity={0.6} />
            <Radar name="Lily" dataKey="B" stroke={colors[1]} fill={colors[1]} fillOpacity={0.6} />
            <PolarGrid />
            <Legend />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={angle} domain={domain} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default SpecifiedDomainRadarChart;
