import React, { Component } from 'react';
import { Table } from 'antd';
import Measure from 'react-measure';
import styles from './index.module.less';

// const columnsDefinition = [
//   {
//     title: 'Channel',
//     dataIndex: 'name',
//     rowKey: 'name',
//     width: 150,
//   },
//   {
//     title: 'Session',
//     dataIndex: 'sessions',
//     rowKey: 'sessions',
//     width: 100,
//   },
//   {
//     title: 'Conversion',
//     dataIndex: 'conversions',
//     rowKey: 'conversions',
//   },
//   {
//     title: 'Previous Period',
//     dataIndex: 'perviousPeriod',
//     rowKey: 'perviousPeriod',
//   },
//   {
//     title: 'Change',
//     dataIndex: 'change',
//     rowKey: 'change',
//   },
//   //   {
//   //     title: 'Trend',
//   //     dataIndex: 'name',
//   //     rowKey: 'name',
//   //   },
// ];

// const data = [
//   {
//     name: 'Press Contact',
//     sessions: '20',
//     conversions: '0.02%',
//     perviousPeriod: '26',
//     change: '-23.10%',
//     trend: [
//       { name: 'First Week', trend: 45 },
//       { name: 'Second Week', trend: 12 },
//       { name: 'Third Week', trend: 38 },
//       { name: 'Fourth Week', trend: 57 },
//     ],
//   },
//   {
//     name: 'Contact Request',
//     sessions: '108',
//     conversions: '0.09%',
//     perviousPeriod: '92',
//     change: '17.40%',
//     trend: [
//       { name: 'First Week', trend: 45 },
//       { name: 'Second Week', trend: 12 },
//       { name: 'Third Week', trend: 38 },
//       { name: 'Fourth Week', trend: 57 },
//     ],
//   },
//   {
//     name: 'New Goal',
//     sessions: '47',
//     conversions: '0.04%',
//     perviousPeriod: '84',
//     change: '-44.00%',
//     trend: [
//       { name: 'First Week', trend: 45 },
//       { name: 'Second Week', trend: 12 },
//       { name: 'Third Week', trend: 38 },
//       { name: 'Fourth Week', trend: 57 },
//     ],
//   },
//   {
//     name: 'Download',
//     sessions: '617',
//     conversions: '0.52%',
//     perviousPeriod: '629',
//     change: '-1.90%',
//     trend: [
//       { name: 'First Week', trend: 45 },
//       { name: 'Second Week', trend: 12 },
//       { name: 'Third Week', trend: 38 },
//       { name: 'Fourth Week', trend: 57 },
//     ],
//   },
//   {
//     name: 'Newsletter Subscription',
//     sessions: '4,535',
//     conversions: '3.52%',
//     perviousPeriod: '4,942',
//     change: '-8.20%',
//     trend: [
//       { name: 'First Week', trend: 45 },
//       { name: 'Second Week', trend: 12 },
//       { name: 'Third Week', trend: 38 },
//       { name: 'Fourth Week', trend: 57 },
//     ],
//   },
// ];
/**
 * Initial example of naive responsive antd table implementation, similar to Datatables component (https://datatables.net/)
 * Columns which will not have enough spacewill be wrapped in expandable part of table.
 *
 */

class ResponsiveBaseTable extends Component {
  state = {
    /* current visible columns */
    columns: [],
    /* columns hidden in expandable part */
    hiddenColumns: [],
    selectedRowKeys: [],
  };

  // definition of table columns in expanded space
  expandedTableColumns = [
    { title: 'Column', dataIndex: 'columnName' },
    // { title: 'Value', dataIndex: 'value' },
  ];

  constructor() {
    super();
    this.renderExpandRow = this.renderExpandRow.bind(this);
    // const needTotalList = initTotalList(columns);
  }

  componentWillMount() {
    const { columnsData } = this.props;
    this.setState({ columns: columnsData });
  }

  selectedRow = record => {
    const { mailView } = this.props;
    if (mailView) {
      mailView(record, '9'); // mainView function need Two parameters, selectedRecord, activeKey of tab
    } else {
      console.log('selected record', record);
    }
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    onChange(pagination, filters, sorter);
  };

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }
    this.setState({ selectedRowKeys });
  };

  recalculateColumns(availableWidth, tableWidth) {
    const { hiddenColumns, columns } = this.state;
    console.log('state**', availableWidth, tableWidth);
    const { columnsData } = this.props;
    if (availableWidth < tableWidth) {
      const tempColumns = columns.slice();
      const columnToHide = tempColumns.pop();
      console.log('columtohide**', columnToHide);

      const tempHiddenColumns = hiddenColumns.slice();
      console.log('hiddencol**', tempHiddenColumns);

      tempHiddenColumns.splice(0, 0, columnToHide);
      console.log('temphidden**', tempHiddenColumns);

      this.setState({ columns: tempColumns, hiddenColumns: tempHiddenColumns }, () => {
        if (this.measure) {
          // call remeasurement of table asynchrounously
          setTimeout(this.measure, 1);
        }
      });
      this.lastAvailableWidth = availableWidth;
    } else if (this.lastAvailableWidth > 400) {
      const tempCol = columns.slice(0, 1);
      console.log('tempcol***', tempCol);
      this.setState({ columns: tempCol });
    } else if (
      this.lastAvailableWidth &&
      this.lastAvailableWidth < availableWidth &&
      hiddenColumns.length > 0
    ) {
      // if available space is growing and there at least one hidden column => reset column visibility
      this.setState({ columns: columnsData, hiddenColumns: [] }, () => {
        if (this.measure) {
          // call remeasurement of table asynchrounously
          setTimeout(this.measure, 1);
        }
      });
    }
  }

  /**
   * rendering method for expanding space
   */
  renderExpandRow(record, index, indent, expanded) {
    const { hiddenColumns } = this.state;
    console.log('hidden', this.state);
    if (expanded) {
      let tempData = hiddenColumns.map(c => {
        console.log(c);
        tempData = { columnName: c.title, value: record[c.dataIndex] };
        console.log(tempData);

        return tempData;
      });
      return (
        <Table
          columns={this.expandedTableColumns}
          dataSource={tempData}
          pagination={false}
          showHeader={false}
        />
      );
    }
  }

  render() {
    const { hiddenColumns, columns, selectedRowKeys } = this.state;
    console.log('columns', this.state);
    const { dataSource, pagination, loading } = this.props;
    console.log('props', this.props);
    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
      // current: pagination.currentPage,
    };
    let expandedRowRender = null;
    if (hiddenColumns.length > 0) {
      expandedRowRender = this.renderExpandRow;
    }
    return (
      <div>
        <Measure
          scroll
          bounds
          onResize={contentRect => {
            console.log(contentRect);
            this.recalculateColumns(contentRect.bounds.width, contentRect.scroll.width);
          }}
        >
          {({ measureRef, measure }) => {
            // storing measure method reference for use in recalculateColumns()
            this.measure = measure;
            return (
              <div ref={measureRef}>
                <Table
                  onRow={record => {
                    console.log('record', record);
                    return {
                      onClick: () => {
                        this.selectedRow(record);
                      }, // click row
                    };
                  }}
                  loading={loading}
                  rowKey={record => (record.key ? record.key : record.id)}
                  columns={columns}
                  rowSelection={rowSelection}
                  dataSource={dataSource}
                  rowClassName={() => styles.responsiveRow}
                  pagination={paginationProps}
                  expandedRowRender={expandedRowRender}
                  onChange={this.handleTableChange}
                />
              </div>
            );
          }}
        </Measure>
      </div>
    );
  }
}

export default ResponsiveBaseTable;
