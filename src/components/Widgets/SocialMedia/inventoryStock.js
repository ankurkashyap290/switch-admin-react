import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
import IntlMessages from '../../Misc/intlMessages';

const piChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#2777b6', '#a7b4b9', '#78b47c', '#f2ad4f', '#d9534d', '#1f91cf'];
const RADIAN = Math.PI / 180;
class InventoryStock extends Component {
  renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    const { data, type } = this.props;
    return (
      <div className="inventoryStock">
        <h3>
          <IntlMessages id={`dashboard.ecommerce.${type}`} />
        </h3>
        <ResponsiveContainer height={329} width="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={this.renderCustomizedLabel}
              fill="#8884d8"
            >
              {piChartData.map((entry, index) => (
                <Cell key={`invt_stock_pie_${+new Date()}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" align="right" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default InventoryStock;
