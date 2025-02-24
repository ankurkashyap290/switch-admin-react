/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { List, Row, Icon, Col, Tooltip, Checkbox, Button, Modal, Tag } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import actions from '../../redux/todos/actions';
import CollapseTodo from './collapseTodo';
import IntlMessages from '../Misc/intlMessages';
import AddTask from './addTask';

const { updateTodo, removeTodo, addTodo, todoFetchList } = actions;

class TodosList extends PureComponent {
  static contextTypes = {
    direction: PropTypes.string,
  };

  state = {
    composeVisible: false,
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 84;
    return adjustHeight;
  };

  listItemClick = item => {
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(item, '9'); // mainView function need Two parameters, selectedRecord, activeKey of tab
    } else {
      console.log('selected record', item);
    }
  };

  handleStrike = (e, item) => {
    e.stopPropagation();
    const { updateTodo } = this.props;
    const data = {
      id: item.id,
      title: item.title,
      status: 'done',
      description: item.description,
    };

    updateTodo(data);
  };

  handleDelete = (e, item) => {
    e.stopPropagation();
    const { todos, removeTodo } = this.props;
    const taskId = item.id;
    const foundTask = todos.list.find(elem => {
      return elem.id === taskId;
    });
    if (foundTask) {
      removeTodo({
        id: foundTask.id,
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
    const { todoFetchList, todos, type, searchValue } = this.props;

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

  render() {
    const { composeVisible } = this.state;
    const {
      list,
      loading,
      basePagination,
      layout,
      todos: { pagination },
      rootHeight,
    } = this.props;
    const { direction } = this.context;
    const listPagination = {
      current: pagination.currentPage,
      total: pagination.total,
      onChange: current => {
        basePagination(current);
      },
      position: 'top',
    };

    return (
      <div>
        {layout === 'default' ? (
          <Scrollbars
            style={{ height: this.calculateHeight() }}
            renderThumbVertical={this.renderThumb}
          >
            <div className="todosList">
              <div style={{ position: 'absolute', zIndex: 1 }}>
                <Button type="primary" onClick={this.showComposeModal}>
                  <IntlMessages id="todo.addtask" />
                </Button>
              </div>
              <List
                loading={loading}
                itemLayout="horizontal"
                position="top"
                pagination={listPagination}
                dataSource={list}
                dir={direction}
                className={direction === 'rtl' ? 'todosListPagination' : ''}
                renderItem={item => {
                  return (
                    <List.Item key={item.id} onClick={this.listItemClick.bind(this, item)}>
                      <List.Item.Meta
                        title={
                          <div>
                            <Row>
                              <Col span={2}>
                                {item.status === 'done' ? (
                                  <Checkbox checked disabled />
                                ) : (
                                  <Checkbox
                                    onClick={e => this.handleStrike(e, item)}
                                    checked={false}
                                  />
                                )}
                              </Col>
                              <Col span={18}>
                                {item.status === 'done' ? (
                                  <strike>{item.title}</strike>
                                ) : (
                                  item.title
                                )}
                              </Col>
                              <Col span={3}>
                                {item.status === 'done' ? (
                                  <Tag color="#173f5f">{item.status}</Tag>
                                ) : (
                                  <div>
                                    {item.status === 'inprocess' ? (
                                      <Tag color="#52c41a">{item.status}</Tag>
                                    ) : (
                                      <Tag color="#ff9800">{item.status}</Tag>
                                    )}
                                  </div>
                                )}
                              </Col>
                              <Col span={1}>
                                <Tooltip placement="top" title="Delete">
                                  <Icon
                                    style={{ color: '#173f5f' }}
                                    type="close-circle"
                                    onClick={e => this.handleDelete(e, item)}
                                  />
                                </Tooltip>
                              </Col>
                            </Row>
                          </div>
                        }
                      />
                    </List.Item>
                  );
                }}
              />
            </div>
          </Scrollbars>
        ) : (
          <CollapseTodo list={list} loading={loading} rootHeight={rootHeight} />
        )}

        <Modal
          title="Add Task"
          visible={composeVisible}
          onOk={this.handleComposeOk.bind(this)}
          onCancel={this.handleComposeCancel}
        >
          <AddTask
            pagination={pagination}
            ref={ref => {
              this.addTodoRef = ref;
            }}
          />
        </Modal>
      </div>
    );
  }
}
export default connect(
  state => ({
    todos: state.todos.toJS(),
  }),
  {
    updateTodo,
    removeTodo,
    addTodo,
    todoFetchList,
  }
)(TodosList);
