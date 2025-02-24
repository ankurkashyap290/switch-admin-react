/* eslint-disable no-shadow */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Card, Form, Input, Select, Icon, Button, Modal, message, Divider, Avatar } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import WindowResizeListener from 'react-window-size-listener';
import PropTypes from 'prop-types';
import BaseTable from '../../../components/BaseTable';
import PageHeaderLayout from '../../../layouts/pageLayouts/PageHeaderLayout';
import { newEntities, avatarList } from '../../../configs/app.config';
import IntlMessages from '../../../components/Misc/intlMessages';
import PromptAction from './PromptAction';
import actions from '../../../redux/contacts/actions';
import { containerHeight } from '../../../utils/index';

const FormItem = Form.Item;
const { Option } = Select;
const { Search } = Input;
const {
  contactAdd,
  contactUpdate,
  contactDelete,
  contactFetch,
  contactRemoveAll,
  changeModelVisible,
} = actions;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

class ContactList extends PureComponent {
  static contextTypes = {
    direction: PropTypes.string,
  };

  state = {
    editContact: null,
    selectedRows: [],
    formValues: {},
    winHeight: '100vh',
  };

  componentDidMount() {
    const {
      contactFetch,
      contacts: { pagination },
    } = this.props;
    contactFetch({
      currentPage: pagination.currentPage,
      pageSize: pagination.pageSize,
    });
  }

  componentWillUpdate(nextProps) {
    const {
      contacts: { refreshMode, pagination },
    } = this.props;
    if (nextProps.contacts.refreshMode && refreshMode === null) {
      this.setState({
        //  modalVisible: false,
        editContact: null,
        selectedRows: [],
      });
    } else if (nextProps.contacts.refreshMode === 'add') {
      this.handleBaseTableChange({ ...pagination }, {}, { field: 'id', order: 'desc' });
      message.success('Contact Added Successfully');
    } else if (nextProps.contacts.refreshMode === 'update') {
      // message.success('Contact Updated Successfully');
    } else if (nextProps.contacts.refreshMode === 'delete') {
      message.success('Contact Removed Successfully');
    } else if (nextProps.contacts.refreshMode === 'removeAll') {
      message.success('Selected Contacts Removed Successfully');
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
    const { contactFetch } = this.props;
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

    contactFetch(params);
  };

  handleDeleteSelected = () => {
    const { contactRemoveAll } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;

    contactRemoveAll({
      remove: selectedRows.map(row => row.id),
    });
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = value => {
    const { contactFetch } = this.props;
    const { formValues: tempFormValues } = this.state;
    const formValues = {
      ...tempFormValues,
      q: value,
      searchKey: 'displayName',
    };
    this.setState({ formValues }, () =>
      contactFetch({
        ...formValues,
      })
    );
  };

  handleModalVisible = flag => {
    const {
      form: { resetFields },
      changeModelVisible,
    } = this.props;
    changeModelVisible(!!flag);
    this.setState(
      {
        // modalVisible: !!flag,
        editContact: null,
      },
      () => resetFields()
    );
  };

  getRandomAvatar = forWhom => {
    const allListFor = avatarList.filter(elem => {
      return elem.for === forWhom;
    });
    const avatar = allListFor[Math.floor(Math.random() * allListFor.length)];
    return avatar.photo;
  };

  handleSubmit = () => {
    const {
      contactAdd,
      contactUpdate,
      form,
      contactFetch,
      contacts: { pagination },
    } = this.props;
    const { editContact } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const mode = editContact ? 'update' : 'add';
      if (mode === 'add') {
        contactAdd({
          ...fieldsValue,
          avatar: this.getRandomAvatar(fieldsValue.gender),
          password: '',
          favorite: false,
          displayName: `${fieldsValue.firstName} ${fieldsValue.lastName}`,
        });
        contactFetch({
          currentPage: pagination.currentPage,
          pageSize: pagination.pageSize,
        });
      } else if (mode === 'update') {
        contactUpdate({
          ...editContact,
          ...fieldsValue,
          displayName: `${fieldsValue.firstName} ${fieldsValue.lastName}`,
        });
      }
    });
  };

  handleEditAction = contactId => {
    const {
      contacts: { list },
      form: { resetFields },
      changeModelVisible,
    } = this.props;

    const foundContact = list.find(elem => {
      return elem.id === contactId;
    });
    if (foundContact) {
      changeModelVisible(true);
      this.setState(
        {
          // modalVisible: true,
          editContact: _.cloneDeep(foundContact),
        },
        () => resetFields()
      );
    }
  };

  handleDeleteAction = record => {
    const {
      contacts: { list },
      contactDelete,
    } = this.props;
    const contactId = record.id;
    const foundContact = list.find(elem => {
      return elem.id === contactId;
    });
    if (foundContact) {
      contactDelete({
        id: foundContact.id,
      });
    }
  };

  handleStarred = contactId => {
    const {
      contacts: { list },
      contactUpdate,
    } = this.props;
    const foundContact = list.find(elem => {
      return elem.id === contactId;
    });
    if (foundContact) {
      contactUpdate({
        ...foundContact,
        favorite: !foundContact.favorite,
      });
    }
  };

  handleFilter = filter => {
    const {
      contacts: { pagination },
      contactFetch,
    } = this.props;

    const { formValues } = { ...this.state };

    if (filter === 'starred') {
      formValues.favorite = true;
    } else {
      delete formValues.favorite;
    }

    this.setState({ formValues }, () =>
      contactFetch({
        currentPage: pagination.current,
        pageSize: pagination.pageSize,
        ...formValues,
      })
    );
  };

  renderAddEditForm = formData => {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Fragment>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.firstName" />} hasFeedback>
          {getFieldDecorator('firstName', {
            initialValue: formData.firstName || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.firstNameRequired" />,
              },
            ],
          })(<Input placeholder="First Name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.lastName" />} hasFeedback>
          {getFieldDecorator('lastName', {
            initialValue: formData.lastName || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.lastNameRequired" />,
              },
            ],
          })(<Input placeholder="Last Name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.email" />} hasFeedback>
          {getFieldDecorator('email', {
            initialValue: formData.email || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.pleaseSpecifyValidEmailAddress" />,
              },
            ],
          })(<Input placeholder="Email Address" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.phone" />} hasFeedback>
          {getFieldDecorator('phone', {
            initialValue: formData.phone || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.pleaseSpecifyValidPhoneNumber" />,
              },
            ],
          })(<Input placeholder="Phone" />)}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.gender" />} hasFeedback>
          {getFieldDecorator('gender', {
            initialValue: formData.gender || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.chooseOneOptionFromList" />,
              },
            ],
          })(
            <Select
              placeholder={<IntlMessages id="contact.chooseGender" />}
              style={{ width: '100%' }}
            >
              <Option key="male">
                <IntlMessages id="contact.male" />
              </Option>
              <Option key="female">
                <IntlMessages id="contact.female" />
              </Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label={<IntlMessages id="contact.designation" />} hasFeedback>
          {getFieldDecorator('position_title', {
            initialValue: formData.position_title || undefined,
            rules: [
              {
                required: true,
                message: <IntlMessages id="contact.pleaseSelectDesignation" />,
              },
            ],
          })(
            <Select
              placeholder={<IntlMessages id="contact.selectDesignation" />}
              style={{ width: '100%' }}
            >
              <Option key="CEO">
                <IntlMessages id="contact.ceo" />
              </Option>
              <Option key="CFO">
                <IntlMessages id="contact.cfo" />
              </Option>
              <Option key="Designer">
                <IntlMessages id="contact.Designer" />
              </Option>
              <Option key="Developer">
                <IntlMessages id="contact.developer" />
              </Option>
              <Option key="HR Manager">
                <IntlMessages id="contact.hrManager" />
              </Option>
            </Select>
          )}
        </FormItem>
      </Fragment>
    );
  };

  render() {
    const {
      contacts: { loading: ruleLoading, pagination, list, modalVisible },
      theme: { breadcrumbVisible },
    } = this.props;
    // const { direction } = this.context;
    const { selectedRows, editContact, winHeight } = this.state;

    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    const columns = [
      {
        title: '',
        dataIndex: 'avatar',
        render: text => {
          return <Avatar src={text} />;
        },
      },
      {
        title: 'Name',
        dataIndex: 'displayName',
        sorter: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: true,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: true,
      },
      {
        title: 'Designation',
        dataIndex: 'position_title',
        sorter: true,
      },
      {
        title: 'Starred',
        dataIndex: 'favorite',
        sorter: true,
        render: (favorite, record) => {
          return (
            <Button onClick={() => this.handleStarred(record.id)}>
              <Icon type="star" theme={favorite ? 'filled' : ''} />
            </Button>
          );
        },
      },
      {
        title: 'Actions',
        render: record => (
          <Fragment>
            <Link to={`contacts/view/${record.id}`}>
              <Icon type="pencil" />
              <span>
                <IntlMessages id="contact.view" />
              </span>
            </Link>
            <Divider type="vertical" />
            <a
              href="#a"
              onClick={e => {
                e.preventDefault();
                this.handleEditAction(record.id);
              }}
            >
              <IntlMessages id="contact.edit" />
            </a>
            <Divider type="vertical" />
            <PromptAction
              key="remove_link"
              list={{ ...record }}
              pagination={pagination}
              onAction={this.handleDeleteAction}
              prompt={<IntlMessages id="contact.areYouSureYouWantToDeleteThisContact?" />}
              action="delete"
              text={<IntlMessages id="contact.delete" />}
              okText={<IntlMessages id="contact.delete" />}
            />
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title={<IntlMessages id="contact.allContacts" />}>
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
              <Search placeholder="Search contact" onSearch={this.handleSearch} enterButton />
            </div>
            <div className="tableListOperator">
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                &nbsp;
                <IntlMessages id="contact.new" />
              </Button>
              <span>
                <a
                  href="#a"
                  onClick={e => {
                    e.preventDefault();
                    this.handleFilter('all');
                  }}
                >
                  <Icon type="bars" />
                  <IntlMessages id="contact.allContacts" />
                </a>
                <Divider type="vertical" />
                <a
                  href="#a"
                  onClick={e => {
                    e.preventDefault();
                    this.handleFilter('starred');
                  }}
                >
                  <Icon type="star" theme="filled" />
                  <IntlMessages id="contact.starredContacts" />
                </a>
              </span>
              {selectedRows.length > 0 && (
                <span>
                  <PromptAction
                    key="remove_all_link"
                    list={null}
                    pagination={pagination}
                    onAction={this.handleDeleteSelected}
                    prompt="Are you sure you want to delete all selected contacts?"
                    action="delete"
                    text={<IntlMessages id="contact.delete" />}
                    okText="Delete"
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
                loading={ruleLoading}
                list={list}
                pagination={pagination}
                columns={columns}
                onSelectRow={this.handleSelectRows}
                onChange={this.handleBaseTableChange}
              />
            </Scrollbars>
          </div>
        </Card>
        <Modal
          title={<IntlMessages id="contact.newContact" />}
          visible={modalVisible}
          onOk={this.handleSubmit}
          onCancel={() => this.handleModalVisible()}
        >
          {this.renderAddEditForm(editContact || _.cloneDeep(newEntities.contacts))}
        </Modal>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts.toJS(),
    theme: state.theme.toJS(),
  }),
  {
    contactAdd,
    contactUpdate,
    contactDelete,
    contactFetch,
    contactRemoveAll,
    changeModelVisible,
  }
)(Form.create()(ContactList));
