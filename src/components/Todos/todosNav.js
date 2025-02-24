import React from 'react';
import { Menu, Icon } from 'antd';
import IntlMessages from '../Misc/intlMessages';

class TodosNav extends React.Component {
  menuItemClick = ({ key }) => {
    const { onMenuSelect } = this.props;
    onMenuSelect && onMenuSelect(key);
  };

  render() {
    const { activeKey } = this.props;
    return (
      <div className="todosNav">
        <Menu defaultSelectedKeys={[activeKey]} mode="inline" onClick={this.menuItemClick}>
          <Menu.Item key="All">
            <Icon type="menu" />
            &nbsp;
            <span>
              <IntlMessages id="todo.all" />
            </span>
          </Menu.Item>
          <Menu.Item key="done">
            <Icon type="check-circle" style={{ color: '#173f5f' }} />
            &nbsp;
            <span>
              <IntlMessages id="todo.done" />
            </span>
          </Menu.Item>
          <Menu.Item key="pending">
            <Icon type="exclamation-circle" style={{ color: '#ff9800' }} />
            &nbsp;
            <span>
              <IntlMessages id="todo.pending" />
            </span>
          </Menu.Item>
          <Menu.Item key="inprocess">
            <Icon type="form" style={{ color: '#52c41a' }} />
            &nbsp;
            <span>
              <IntlMessages id="todo.inprocess" />
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TodosNav;
