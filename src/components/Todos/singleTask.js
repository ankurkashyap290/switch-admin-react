/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Divider, Icon, Button, Input, Select, Tag } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import actions from '../../redux/todos/actions';

const { updateTodo } = actions;
const Option = Select.Option;

class SingleTask extends React.Component {
  state = {
    editTitle: false,
    editStatus: false,
    editDescription: false,
    taskField: null,
  };

  calculateheight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 84;
    return adjustHeight;
  };

  goBack = () => {
    const { currentActiveTab, type } = this.props;
    currentActiveTab(type);
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  editTitle = () => {
    this.setState({ editTitle: true });
  };

  editStatus = () => {
    this.setState({ editStatus: true });
  };

  editDescription = () => {
    this.setState({ editDescription: true });
  };

  onChange = value => {
    this.setState({ taskField: value });
  };

  updateTitle = taskData => {
    const { updateTodo } = this.props;
    const { taskField } = this.state;
    const data = {
      id: taskData.id,
      title: taskField,
    };
    updateTodo(data);
    this.setState({
      editTitle: false,
    });
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

  render() {
    const { taskData, todos } = this.props;
    const { editTitle, editStatus, editDescription } = this.state;
    const data = todos.list.find(elem => {
      return elem.id === taskData.id;
    });
    return (
      <div>
        <Scrollbars
          style={{ height: this.calculateheight() }}
          renderThumbVertical={this.renderThumb}
        >
          <Row>
            <Col span={4}>
              <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
              </Button>
            </Col>

            <Col span={20}>
              <Row>
                <Col>
                  {editTitle ? (
                    <div className="editTask">
                      <Input
                        placeholder={data.title}
                        onChange={e => this.onChange(e.target.value)}
                        suffix={<Icon type="check" onClick={() => this.updateTitle(data)} />}
                      />
                    </div>
                  ) : (
                    <h2>
                      {data.title} <Icon type="edit" value={data.title} onClick={this.editTitle} />
                    </h2>
                  )}

                  {editStatus ? (
                    <div className="editTask">
                      <Select
                        defaultValue={data.status}
                        style={{ width: '100%' }}
                        onChange={value => this.updateStatus(value, data)}
                      >
                        <Option value="pending">Pending</Option>
                        <Option value="inprocess">InProcess</Option>
                        <Option value="done">Done</Option>
                      </Select>
                    </div>
                  ) : (
                    <Row>
                      {data.status === 'done' ? (
                        <Tag color="#173f5f">
                          {data.status} <Icon type="edit" onClick={this.editStatus} />
                        </Tag>
                      ) : (
                        <Row style={{ marginBottom: '5px' }}>
                          {data.status === 'inprocess' ? (
                            <Tag color="#52c41a">
                              {data.status} <Icon type="edit" onClick={this.editStatus} />
                            </Tag>
                          ) : (
                            <Tag color="#ff9800">
                              {data.status} <Icon type="edit" onClick={this.editStatus} />
                            </Tag>
                          )}
                        </Row>
                      )}
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>

            <Divider />

            <Col>
              {editDescription ? (
                <div className="editTask">
                  <Input
                    placeholder={data.description}
                    onChange={e => this.onChange(e.target.value)}
                    suffix={<Icon type="check" onClick={() => this.updateDescription(data)} />}
                  />
                </div>
              ) : (
                <p>
                  {data.description} <Icon type="edit" onClick={this.editDescription} />
                </p>
              )}
            </Col>
          </Row>
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
  }
)(SingleTask);
