import React, { PureComponent, Fragment } from 'react';
import { Table, Alert } from 'antd';
import IntlMessages from '../Misc/intlMessages';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class BaseTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      this.setState({
        selectedRowKeys: [],
        needTotalList,
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    const { onSelectRow } = this.props;
    needTotalList = [...needTotalList].map(item => {
      return {
        ...item,
        total: selectedRows.reduce((sum, val) => {
          return sum + parseFloat(val[item.dataIndex], 10);
        }, 0),
      };
    });

    if (onSelectRow) {
      onSelectRow(selectedRows);
    }
    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    onChange(pagination, filters, sorter);
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  selectedRow = record => {
    const { mailView } = this.props;
    if (mailView) {
      mailView(record, '9'); // mainView function need Two parameters, selectedRecord, activeKey of tab
    } else {
      console.log('selected record', record);
    }
  };

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { list, pagination, loading, columns } = this.props;
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
      // current: pagination.currentPage,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className="baseTable">
        {selectedRowKeys.length > 0 && (
          <div className="tableAlert">
            <Alert
              message={
                <Fragment>
                  <IntlMessages id="baseTable.choosen" />{' '}
                  <a href="#a" style={{ fontWeight: 600 }}>
                    {selectedRowKeys.length}
                  </a>{' '}
                  <IntlMessages id="baseTable.item" />
                  &nbsp;&nbsp;
                  {needTotalList.map(item => (
                    <span style={{ marginLeft: 8 }} key={item.dataIndex}>
                      {item.title}total&nbsp;
                      <span style={{ fontWeight: 600 }}>
                        {item.render ? item.render(item.total) : item.total}
                      </span>
                    </span>
                  ))}
                  <a href="#a" onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                    <IntlMessages id="baseTable.clearSelection" />
                  </a>
                </Fragment>
              }
              type="info"
              showIcon
            />
          </div>
        )}
        <Table
          onRow={record => {
            return {
              onClick: () => {
                this.selectedRow(record);
              }, // click row
            };
          }}
          loading={loading}
          rowKey={record => (record.key ? record.key : record.id)}
          rowSelection={rowSelection}
          dataSource={list}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default BaseTable;
