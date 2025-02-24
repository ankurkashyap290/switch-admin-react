import React, { Component } from 'react';
import { Icon, Progress } from 'antd';
import SimpleAreaChart from '../../components/Widgets/Charts/SimpleAreaChart';
import SimpleBarChart from '../../components/Widgets/Charts/SimpleBarChart';
import TableWithCharts from '../../components/Widgets/Charts/TableWithCharts';

const colors = {
  users: '#327ab7',
  profit: '#5bb75b',
  orders: '#f2ad4f',
  sales: '#d9534d',
};
const productColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Total',
    dataIndex: 'values',
    key: 'values',
  },
  {
    title: 'vs LY',
    dataIndex: 'vsLY',
    key: 'vsLY',
    render: data => (
      <span>
        {<Icon type={data.type} style={{ color: data.color }} />}
        {data.value}
      </span>
    ),
  },
  {
    title: 'Monthly Trend',
    dataIndex: 'monthlyTrend',
    key: 'monthlyTrend',
    render: trend => (
      <span>
        {
          <SimpleAreaChart
            width={100}
            height={40}
            data={trend}
            dataKey="monthlyTrend"
            strokeColor="#f3aa4a"
            fillColor="#f7ce997a"
          />
        }
      </span>
    ),
  },
];
const salesColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Total',
    dataIndex: 'values',
    key: 'values',
  },
  {
    title: 'Plan',
    dataIndex: 'plan',
    key: 'plan',
  },
  {
    title: 'vs LY',
    dataIndex: 'vsLY',
    key: 'vsLY',
    render: data => (
      <span>
        {<Icon type={data.type} style={{ color: data.color }} />}
        {data.value}
      </span>
    ),
  },
  {
    title: 'Monthly Trend',
    dataIndex: 'monthlyTrend',
    key: 'monthlyTrend',
    render: trend => (
      <span>
        {
          <SimpleAreaChart
            width={100}
            height={40}
            data={trend}
            dataKey="monthlyTrend"
            strokeColor="#f3aa4a"
            fillColor="#f7ce997a"
          />
        }
      </span>
    ),
  },
];
const marketingFinanceColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Values',
    dataIndex: 'values',
    key: 'values',
  },
  {
    title: 'Plan',
    dataIndex: 'plan',
    key: 'plan',
  },
  {
    title: 'vs LY',
    dataIndex: 'vsLY',
    key: 'vsLY',
    render: data => (
      <span>
        {<Icon type={data.type} style={{ color: data.color }} />}
        {data.value}
      </span>
    ),
  },
  {
    title: 'Monthly Trend',
    dataIndex: 'monthlyTrend',
    key: 'monthlyTrend',
    render: trend => (
      <span>
        {
          <SimpleBarChart
            width={200}
            height={40}
            data={trend}
            dataKey="monthlyTrend"
            fillColor="#413ea0"
          />
        }
      </span>
    ),
  },
];
const goalsColumns = [
  {
    title: 'Chanel',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
  },
  {
    title: 'Conversions',
    dataIndex: 'conversions',
    key: 'conversions',
  },
  {
    title: 'Pervious Period',
    dataIndex: 'perviousPeriod',
    key: 'perviousPeriod',
  },
  {
    title: 'Change',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: 'Trend',
    dataIndex: 'trend',
    key: 'trend',
    render: trend => (
      <span>
        {
          <SimpleAreaChart
            width={100}
            height={40}
            data={trend}
            dataKey="trend"
            strokeColor={colors.orders}
            fillColor="#f7ce997a"
          />
        }
      </span>
    ),
  },
];

const saleByProductColumns = [
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Stock(sold/left)',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Sales',
    key: 'sales',
    dataIndex: 'sales',
    render: progress => <span>{<Progress percent={progress} />}</span>,
  },
];

class dashboardTable extends Component {
  getColumnsValue = () => {
    const { type } = this.props;
    let result = [];
    if (type === 'product') {
      result = productColumns;
    } else if (type === 'sales') {
      result = salesColumns;
    } else if (type === 'marketing') {
      result = marketingFinanceColumns;
    } else if (type === 'finance') {
      result = marketingFinanceColumns;
    } else if (type === 'saleByProduct') {
      result = saleByProductColumns;
    } else if (type === 'analyticGoals') {
      result = goalsColumns;
    } else {
      return result;
    }
    return result;
  };

  render() {
    const { dataSource, label } = this.props;
    return (
      <div className="dashboardTable">
        <TableWithCharts columns={this.getColumnsValue()} dataSource={dataSource} label={label} />
      </div>
    );
  }
}
export default dashboardTable;
