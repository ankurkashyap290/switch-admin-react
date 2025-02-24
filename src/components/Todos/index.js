/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Input, Modal, Pagination, Select } from 'antd';
import WindowResizeListener from 'react-window-size-listener';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import IntlMessages from '../Misc/intlMessages';
import actions from '../../redux/todos/actions';
import TodosNav from './todosNav';
import TodosList from './todosList';
import SingleTask from './singleTask';
import AddTask from './addTask';
import { containerHeight } from '../../utils/index';

let todosLayout = null;

const { todoFetchList, addTodo } = actions;
const { Option } = Select;

const { Search } = Input;
class TodoApp extends React.Component {
  state = {
    type: 'All',
    searchValue: '',
    winHeight: '100vH',
    composeVisible: false,
    singleTaskView: false,
  };

  componentDidMount() {
    const {
      todoFetchList,
      todos: { pagination },
    } = this.props;
    const { searchValue, type } = this.state;
    let currentPage = 1;
    if (pagination.currentPage > 1) {
      currentPage = 1;
    }
    todoFetchList({
      currentPage,
      type,
      loading: true,
      q: searchValue,
    });
  }

  currentActiveTab = activeKey => {
    this.setState({ type: activeKey, singleTaskView: false });
    const {
      todoFetchList,
      todos: { pagination },
    } = this.props;

    let currentPage = 1;
    if (pagination.currentPage > 1) {
      currentPage = 1;
    }
    if (activeKey === 'All') {
      todoFetchList({
        currentPage,
        status: '',
        loading: true,
      });
    } else {
      todoFetchList({
        currentPage,
        status: activeKey,
        loading: true,
      });
    }
  };

  handleMenuSelect = listType => {
    this.setState({
      type: listType,
    });
    const { searchValue } = this.state;

    const {
      todoFetchList,
      todos: { pagination },
    } = this.props;
    let currentPage = 1;
    if (pagination.currentPage > 1) {
      currentPage = 1;
    }
    if (listType === 'All') {
      todoFetchList({ status: '', currentPage, q: searchValue });
    } else {
      todoFetchList({
        status: listType,
        currentPage,
        q: searchValue,
      });
    }
  };

  handleMenu = item => {
    this.setState({
      type: item,
    });
    const { searchValue } = this.state;

    const {
      todoFetchList,
      todos: { pagination },
    } = this.props;
    let currentPage = 1;
    if (pagination.currentPage > 1) {
      currentPage = 1;
    }
    if (item === 'All') {
      todoFetchList({ status: '', currentPage, q: searchValue });
    } else {
      todoFetchList({
        status: item,
        currentPage,
        q: searchValue,
      });
    }
  };

  singleTaskView = record => {
    this.setState({ singleTaskView: true });
    const { winHeight, type } = this.state;
    const { breadcrumbVisible } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);

    todosLayout = (
      <SingleTask
        taskData={record}
        currentActiveTab={this.currentActiveTab}
        rootHeight={rootHeight}
        type={type}
      />
    );
    this.setState({ type: '' });
  };

  getTodoLayout = (type, data) => {
    let tempTodoLayout = null;
    const { winHeight, searchValue } = this.state;
    const { breadcrumbVisible, todos } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);

    const {
      layout,
      todos: { loading },
    } = this.props;
    if (type) {
      tempTodoLayout = (
        <TodosList
          type={type}
          todoFetchList={todoFetchList}
          todos={todos}
          searchValue={searchValue}
          list={!data.list ? [] : data.list}
          loading={loading}
          onSelectRow={this.singleTaskView}
          onSearch={this.handelOnSearch}
          rootHeight={rootHeight}
          basePagination={this.handlePagination}
          layout={layout}
        />
      );
    } else {
      tempTodoLayout = todosLayout;
    }
    return tempTodoLayout;
  };

  renderTodoLayoutTitle = () => {
    const { type, singleTaskView } = this.state;
    const {
      layout,
      todos: { pagination },
    } = this.props;

    return (
      <Row>
        {layout === 'default' ? (
          <div>
            {' '}
            {singleTaskView ? null : (
              <Search
                placeholder={`Search in: ${this.firstLetterUpperCase(type)}`}
                onSearch={value => this.handelOnSearch(value)}
              />
            )}
          </div>
        ) : (
          <Row gutter={2}>
            <Col xl={4} sm={4} md={4} lg={4}>
              <Button type="primary" onClick={this.showComposeModal}>
                <IntlMessages id="todo.addtask" />
              </Button>
            </Col>
            <Col xl={4} sm={4} md={4} lg={4}>
              <Select defaultValue={type} onChange={this.handleMenu} style={{ width: '100%' }}>
                <Option key="All" value="All">
                  <IntlMessages id="todo.all" />
                </Option>

                <Option key="inprocess" value="inprocess">
                  <IntlMessages id="todo.inProcess" />
                </Option>
                <Option key="pending" value="pending">
                  <IntlMessages id="todo.pending" />
                </Option>
                <Option key="done" value="done">
                  <IntlMessages id="todo.done" />
                </Option>
              </Select>
            </Col>
            <Col xl={10} sm={10} md={10} lg={10}>
              <Search
                placeholder={`Search in: ${this.firstLetterUpperCase(type)}`}
                onSearch={value => this.handelOnSearch(value)}
              />
            </Col>
            <Col xl={4} sm={4} md={4} lg={4} style={{ textAlign: 'right' }}>
              <Pagination
                current={pagination.currentPage}
                total={pagination.total}
                onChange={this.onChangePage}
              />
            </Col>
          </Row>
        )}
      </Row>
    );
  };

  firstLetterUpperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  onChangePage = pageNumber => {
    const { todoFetchList } = this.props;
    const { searchValue } = this.state;
    todoFetchList({
      currentPage: pageNumber,
      loading: true,
      q: searchValue,
    });
  };

  handelOnSearch = value => {
    const { todoFetchList, todos } = this.props;
    const { type } = this.state;

    this.setState({ searchValue: value });
    if (type === 'All') {
      todoFetchList({
        currentPage: todos.pagination.currentPage,
        loading: true,
        status: '',
        q: value,
      });
    } else {
      todoFetchList({
        currentPage: todos.pagination.currentPage,
        loading: true,
        status: type,
        q: value,
      });
    }
  };

  showComposeModal = () => {
    this.setState({
      composeVisible: true,
    });
  };

  handleComposeOk = e => {
    console.log(e);
    const { validateFieldsAndScroll, resetFields } = this.addTodoRef;
    const { todoFetchList, todos } = this.props;
    const { type, searchValue } = this.state;
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        const { addTodo } = this.props;
        addTodo(values);
        this.setState(
          {
            composeVisible: false,
          },
          () => resetFields()
        );
        if (type === 'All') {
          todoFetchList({
            currentPage: todos.pagination.currentPage,
            loading: true,
            status: '',
            q: searchValue,
          });
        } else {
          todoFetchList({
            currentPage: todos.pagination.currentPage,
            loading: true,
            status: type,
            q: searchValue,
          });
        }
      }
    });
  };

  handleComposeCancel = e => {
    console.log(e);
    this.setState({
      composeVisible: false,
    });
  };

  handlePagination = currentPage => {
    const { type, searchValue } = this.state;
    const { todoFetchList } = this.props;
    let payload = {};
    payload = {
      currentPage,
      loading: true,
      type,
      q: searchValue,
    };
    todoFetchList(payload);
  };

  render() {
    const { type, winHeight, composeVisible } = this.state;
    const { layout, todos, breadcrumbVisible } = this.props;
    const rootHeight = containerHeight(winHeight, breadcrumbVisible);
    todosLayout = this.getTodoLayout(type, todos);

    return (
      <PageHeaderLayout title={<IntlMessages id="todo.todoApp" />}>
        <WindowResizeListener
          onResize={windowSize => {
            this.setState({
              winHeight: windowSize.windowHeight,
            });
          }}
        />
        {layout === 'default' ? (
          <div className="todosContainer" style={{ height: `${rootHeight}px` }}>
            <Row gutter={1}>
              <Col xl={4} sm={24} md={4} lg={4} xs={24} className="mainTodoNav">
                <Card>
                  <TodosNav onMenuSelect={this.handleMenuSelect} activeKey={type} />
                </Card>
              </Col>
              <Col xl={1} sm={0} md={1} lg={1} xs={0} className="backgroundClr" />
              <Col xl={19} sm={24} md={19} lg={19} xs={24} className="mainTodoLayout">
                <Card title={this.renderTodoLayoutTitle()}>{todosLayout}</Card>
              </Col>
            </Row>
          </div>
        ) : (
          <Card style={{ height: `${rootHeight}px` }} title={this.renderTodoLayoutTitle()}>
            {todosLayout}
          </Card>
        )}
        <Modal
          title="Add Task"
          visible={composeVisible}
          onOk={this.handleComposeOk.bind(this)}
          onCancel={this.handleComposeCancel}
        >
          <AddTask
            pagination={todos.pagination}
            ref={ref => {
              this.addTodoRef = ref;
            }}
          />
        </Modal>
      </PageHeaderLayout>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos.toJS(),
  }),
  {
    todoFetchList,
    addTodo,
  }
)(TodoApp);
