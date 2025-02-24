/* eslint-disable no-shadow */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card, Input, Button, Divider, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import WindowResizeListener from 'react-window-size-listener';
import BaseTable from '../../../components/BaseTable';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../../../components/Misc/intlMessages';
import PromptAction from './PromptAction';
import actions from '../../../redux/products/actions';
import { containerHeight } from '../../../utils/index';

const { Search } = Input;
const { productFetch, productRemoveAll, productDelete } = actions;

class Products extends PureComponent {
  state = {
    selectedRows: [],
    formValues: {},
    winHeight: '100vh',
  };

  componentDidMount() {
    const {
      productFetch,
      products: { pagination },
    } = this.props;

    productFetch({
      currentPage: pagination.currentPage,
      pageSize: pagination.pageSize,
    });
  }

  componentWillUpdate(nextProps) {
    const {
      products: { refreshMode },
    } = this.props;

    if (nextProps.products.refreshMode && refreshMode === null) {
      this.setState({
        selectedRows: [],
      });
    }
  }

  calculateHeight = () => {
    const {
      theme: { breadcrumbVisible },
    } = this.props;
    const { winHeight } = this.state;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    const adjustHeight = rootHeight - 144;
    return adjustHeight;
  };

  handleBaseTableChange = (pagination, filtersArg, sorter) => {
    const { productFetch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = filtersArg[key];
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}#${sorter.order}`;
    }

    productFetch(params);
  };

  handleDeleteSelected = () => {
    const { productRemoveAll } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;

    productRemoveAll({
      remove: selectedRows.map(row => row.id),
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = value => {
    const { productFetch } = this.props;
    const { formValues: tempFormValues } = this.props;
    const formValues = {
      ...tempFormValues,
      q: value,
      searchKey: 'name',
    };
    this.setState({ formValues }, () => productFetch({ ...formValues }));
  };

  handleAddNew = () => {
    const { history } = this.props;
    history.push('/app/products/add');
  };

  handleDeleteAction = record => {
    const {
      products: { list },
      productDelete,
    } = this.props;
    const productId = record.id;
    const foundProduct = list.find(elem => {
      return elem.id === productId;
    });
    if (foundProduct) {
      productDelete({
        id: foundProduct.id,
      });
    }
  };

  render() {
    const {
      products: { loading, list, pagination },
      theme: { breadcrumbVisible },
    } = this.props;
    const { selectedRows, winHeight } = this.state;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);

    const columns = [
      {
        title: '',
        dataIndex: 'image',
        render: text => {
          return <Avatar src={text} />;
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
      },
      {
        title: 'Price',
        dataIndex: 'price',
        sorter: true,
        render: text => {
          return `$${text}`;
        },
      },
      {
        title: 'Actions',
        render: record => (
          <Fragment>
            <Link to={`/app/products/view/${record.id}`}>
              <IntlMessages id="product.view" />
            </Link>
            <Divider type="vertical" />
            <Link to={`/app/products/edit/${record.id}`}>
              <IntlMessages id="product.edit" />
            </Link>
            <Divider type="vertical" />
            <PromptAction
              key="remove_link"
              data={{ ...record }}
              onAction={this.handleDeleteAction}
              prompt={<IntlMessages id="product.areYouSureYouWantToDeleteThisProduct?" />}
              action="delete"
              text={<IntlMessages id="product.delete" />}
              okText={<IntlMessages id="product.delete" />}
            />
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title={<IntlMessages id="product.allProducts" />}>
        <WindowResizeListener
          onResize={windowSize => {
            this.setState({
              winHeight: windowSize.windowHeight,
            });
          }}
        />

        <Card bordered={false} style={{ height: `${rootHeight}px` }}>
          <div className="tableList">
            <div className="tableListForm">
              <Search placeholder="Search product" onSearch={this.handleSearch} enterButton />
            </div>
            <div className="tableListOperator">
              <span className="customPrimary">
                <Button icon="plus" type="primary" onClick={() => this.handleAddNew()}>
                  &nbsp;
                  <IntlMessages id="product.new" />
                </Button>
              </span>
              {selectedRows.length > 0 && (
                <span>
                  <PromptAction
                    key="remove_all_link"
                    list={null}
                    pagination={pagination}
                    onAction={this.handleDeleteSelected}
                    prompt={
                      <IntlMessages id="product.areYouSureYouWantToDeleteAllSelectedProducts?" />
                    }
                    action="delete"
                    text={<IntlMessages id="product.delete" />}
                    okText={<IntlMessages id="product.delete" />}
                    isButton
                  />
                </span>
              )}
            </div>
            <Scrollbars
              style={{ height: this.calculateHeight() }}
              renderThumbVertical={this.renderThumb}
            >
              <BaseTable
                selectedRows={selectedRows}
                loading={loading}
                list={list}
                pagination={pagination}
                columns={columns}
                onSelectRow={this.handleSelectRows}
                onChange={this.handleBaseTableChange}
              />
            </Scrollbars>
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    products: state.products.toJS(),
    theme: state.theme.toJS(),
  }),
  {
    productDelete,
    productRemoveAll,
    productFetch,
  }
)(Products);
