/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Icon, Col, Collapse, Tag, Select, Input } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import actions from '../../redux/todos/actions';

const { updateTodo, removeTodo } = actions;
const Panel = Collapse.Panel;
const Option = Select.Option;

class CollapseTodo extends PureComponent {
  state = {
    editStatus: false,
    editDescription: false,
    taskField: null,
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - (64 + 24 + 24);
    return adjustHeight;
  };

  handleCollapseClick = () => {};

  editStatus = () => {
    this.setState({ editStatus: true });
  };

  editDescription = () => {
    this.setState({ editDescription: true });
  };

  onChange = value => {
    this.setState({ taskField: value });
  };

  updateStatus = (value, taskData) => {
    const { updateTodo } = this.props;
    const data = {
      id: taskData.id,
      status: value,
    };
    updateTodo(data);
    this.setState({
      editStatus: false,
    });
  };

  updateDescription = taskData => {
    const { updateTodo } = this.props;
    const { taskField } = this.state;
    const data = {
      id: taskData.id,
      description: taskField,
    };
    updateTodo(data);
    this.setState({
      editDescription: false,
    });
  };

  addIcon = () => <Icon type="minus-circle" theme="filled" style={{ color: '#06477D' }} />;

  render() {
    const { list } = this.props;
    const { editStatus, editDescription } = this.state;
    return (
      <div>
        <Scrollbars
          style={{ height: this.calculateHeight() }}
          renderThumbVertical={this.renderThumb}
        >
          <Collapse bordered={false} onChange={() => this.handleCollapseClick} accordion>
            {list.map(list => {
              return (
                <Panel
                  key={list.id}
                  showArrow={false}
                  header={
                    <div>
                      {list.status === 'done' ? (
                        <Row>
                          <Col span={20}>
                            <strike>{list.title}</strike>
                          </Col>
                          <Col span={4}>
                            <Tag color="#173f5f">{list.status}</Tag>
                          </Col>
                        </Row>
                      ) : (
                        <Row>
                          <Col span={20}>{list.title}</Col>
                          <Col span={4}>
                            {list.status === 'inprocess' ? (
                              <Tag color="#52c41a">{list.status}</Tag>
                            ) : (
                              <Tag color="#ff9800">{list.status}</Tag>
                            )}
                          </Col>
                        </Row>
                      )}
                    </div>
                  }
                  extra={<p>piyush</p>}
                >
                  <Row>
                    {editDescription ? (
                      <div className="editTask">
                        <Input
                          placeholder={list.description}
                          onChange={e => this.onChange(e.target.value)}
                          suffix={
                            <Icon type="check" onClick={() => this.updateDescription(list)} />
                          }
                        />
                      </div>
                    ) : (
                      <p>
                        {list.description} <Icon type="edit" onClick={this.editDescription} />
                      </p>
                    )}
                  </Row>
                  <Row>
                    {editStatus ? (
                      <div className="editTask">
                        <Select
                          defaultValue={list.status}
                          style={{ width: '100%' }}
                          onChange={value => this.updateStatus(value, list)}
                        >
                          <Option value="pending">Pending</Option>
                          <Option value="inprocess">InProcess</Option>
                          <Option value="done">Done</Option>
                        </Select>
                      </div>
                    ) : (
                      <div>
                        {list.status === 'done' ? (
                          <Tag color="#173f5f">
                            {list.status} <Icon type="edit" onClick={this.editStatus} />
                          </Tag>
                        ) : (
                          <div>
                            {list.status === 'pending' ? (
                              <Tag color="#ff9800">
                                {list.status}
                                <Icon type="edit" onClick={this.editStatus} />
                              </Tag>
                            ) : (
                              <Tag color="#52c41a">
                                {list.status}
                                <Icon type="edit" onClick={this.editStatus} />
                              </Tag>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </Row>
                </Panel>
              );
            })}
          </Collapse>
        </Scrollbars>
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
  }
)(CollapseTodo);
