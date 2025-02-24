import React, { PureComponent } from 'react';
import { Table, Tag } from 'antd';
import productsSaleData from './productsSale';

const columns = [
  {
    title: 'Products',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Buyer',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: tag => (
      <span>
        {
          <Tag color={getColor(tag)} key={tag}>
            {tag}
          </Tag>
        }
      </span>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'amount',
    key: 'price',
  },
];

function getColor(status) {
  const COLORS = {
    completed: '#1bc49f',
    pending: '#fe8043',
    canceled: '#0088fe',
  };
  return COLORS[status];
}

class ProductsOfMonth extends PureComponent {
  render() {
    return <Table columns={columns} dataSource={productsSaleData.latestSale} pagination={false} />;
  }
}
export default ProductsOfMonth;
