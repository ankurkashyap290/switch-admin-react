/* eslint-disable no-shadow */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table, Switch, Radio, Form, Divider, Badge, Card } from 'antd';
import moment from 'moment';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../components/Misc/intlMessages';
import actions from '../../redux/rules/actions';

const { rulesFetch } = actions;

const FormItem = Form.Item;

const statusMap = ['default', 'processing', 'success', 'error'];

const status = ['shut down', 'Running', 'Already online', 'abnormal'];

const columns = [
  {
    title: 'Code',
    dataIndex: 'no',
  },
  {
    title: 'Total service calls',
    dataIndex: 'callNo',
    render: val => <div style={{ textAlign: 'center' }}>{val} Million</div>,
  },
  {
    title: 'status',
    dataIndex: 'status',
    render(val) {
      return <Badge status={statusMap[val]} text={status[val]} />;
    },
  },
  {
    title: 'Updated',
    dataIndex: 'updatedAt',
    sorter: true,
    render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
  },
  {
    title: 'Actions',
    render: () => (
      <Fragment>
        <a href="#a">
          <IntlMessages id="list.setup" />
        </a>
        <Divider type="vertical" />
        <a href="#a">
          <IntlMessages id="list.subscribe" />
        </a>
      </Fragment>
    ),
  },
];

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Table title here';
const showHeader = true;
const footer = () => 'Table footer here';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

class TableListAllOptions extends PureComponent {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
  };

  componentDidMount() {
    const {
      rulesFetch,
      rules: { data },
    } = this.props;
    rulesFetch({
      currentPage: data.pagination.currentPage,
      pageSize: data.pagination.pageSize,
    });
  }

  handleToggle = prop => {
    return enable => {
      this.setState({ [prop]: enable });
    };
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleExpandChange = enable => {
    this.setState({
      expandedRowRender: enable ? expandedRowRender : undefined,
    });
  };

  handleTitleChange = enable => {
    this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = enable => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = enable => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = enable => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleScollChange = enable => {
    this.setState({ scroll: enable ? scroll : undefined });
  };

  handlePaginationChange = e => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  };

  render() {
    const {
      rules: { data },
    } = this.props;
    const {
      bordered,
      loading,
      title: tableTitle,
      showHeader: tableShowHeader,
      footer: tableFooter,
      expandedRowRender: tableExpandedRowRender,
      rowSelection,
      scroll: tableScroll,
      size,
      pagination: tablePagination,
    } = this.state;
    return (
      <PageHeaderLayout title={<IntlMessages id="list.main.title" />}>
        <Card bordered={false}>
          <div className="components-table-demo-control-bar">
            <Form layout="inline">
              <FormItem label={<IntlMessages id="list.bordered" />}>
                <Switch checked={bordered} onChange={this.handleToggle('bordered')} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.loading" />}>
                <Switch checked={loading} onChange={this.handleToggle('loading')} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.title" />}>
                <Switch checked={!!tableTitle} onChange={this.handleTitleChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.columnHeader" />}>
                <Switch checked={!!tableShowHeader} onChange={this.handleHeaderChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.footer" />}>
                <Switch checked={!!tableFooter} onChange={this.handleFooterChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.expandable" />}>
                <Switch checked={!!tableExpandedRowRender} onChange={this.handleExpandChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.checkbox" />}>
                <Switch checked={!!rowSelection} onChange={this.handleRowSelectionChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.fixedHeader" />}>
                <Switch checked={!!tableScroll} onChange={this.handleScollChange} />
              </FormItem>
              <FormItem label={<IntlMessages id="list.size" />}>
                <Radio.Group size="default" value={size} onChange={this.handleSizeChange}>
                  <Radio.Button value="default">
                    <IntlMessages id="list.default" />
                  </Radio.Button>
                  <Radio.Button value="middle">
                    <IntlMessages id="list.middle" />
                  </Radio.Button>
                  <Radio.Button value="small">
                    <IntlMessages id="list.small" />
                  </Radio.Button>
                </Radio.Group>
              </FormItem>
              <FormItem label={<IntlMessages id="list.pagination" />}>
                <Radio.Group
                  value={tablePagination ? tablePagination.position : 'none'}
                  onChange={this.handlePaginationChange}
                >
                  {/* <Radio.Button value="top">Top</Radio.Button> */}
                  <Radio.Button value="bottom">
                    <IntlMessages id="list.bottom" />
                  </Radio.Button>
                  {/* <Radio.Button value="both">Both</Radio.Button> */}
                  <Radio.Button value="none">
                    <IntlMessages id="list.none" />
                  </Radio.Button>
                </Radio.Group>
              </FormItem>
            </Form>
          </div>
          <Table {...this.state} columns={columns} dataSource={data.list} />
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    rules: state.rules.toJS(),
  }),
  {
    rulesFetch,
  }
)(TableListAllOptions);
