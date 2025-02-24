import React from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropdownClickEvent extends React.Component {
  render() {
    const onClick = function({ key }) {
      message.info(`Click on item ${key}`);
    };

    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">
          {' '}
          <IntlMessages id="ui.uiDropDown.1stMenuItem" />
        </Menu.Item>
        <Menu.Item key="2">
          {' '}
          <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <IntlMessages id="ui.uiDropDown.3rdMenuItem" />
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#/">
          <IntlMessages id="ui.uiDropDown.hoverMe" />,{' '}
          <IntlMessages id="ui.uiDropDown.clickMenuItem" /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
export default DropdownClickEvent;
