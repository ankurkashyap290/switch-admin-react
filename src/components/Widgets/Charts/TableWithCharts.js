import React, { Component } from 'react';
import { Table } from 'antd';
import IntlMessages from '../../Misc/intlMessages';

class TableWithCharts extends Component {
  render() {
    const { columns, dataSource, label, desc } = this.props;
    return (
      <div className="tableWithCharts">
        <h3>
          <IntlMessages id={label} />
        </h3>
        {desc ? (
          <small>
            <IntlMessages id={desc} />
          </small>
        ) : (
          ''
        )}
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    );
  }
}
export default TableWithCharts;
