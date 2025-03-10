import React, { Component } from 'react';
import { Pie, PieChart, Sector, ResponsiveContainer } from 'recharts';

class CustomActiveShapePieChart extends Component {
  constructor(props) {
    super(props);
    this.onPieEnter = this.onPieEnter.bind(this);
    this.state = { activeIndex: 0 };
  }

  onPieEnter = (data, index) => {
    console.log(data, index);
    // this.setState({
    //   activeIndex: index,
    // });
  };

  render() {
    const { data, height, colors } = this.props;
    const { activeIndex } = this.state;
    return (
      <div>
        <ResponsiveContainer height={height} width="100%">
          <PieChart onMouseEnter={this.onPieEnter}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              dataKey="value"
              data={data}
              innerRadius="60%"
              outerRadius="80%"
              fill={colors[0]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default CustomActiveShapePieChart;

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#788195"
      >{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
