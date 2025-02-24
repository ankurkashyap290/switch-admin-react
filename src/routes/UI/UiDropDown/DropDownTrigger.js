import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownTrigger extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="#/">
            <IntlMessages id="ui.uiDropDown.1stMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#/">
            <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <IntlMessages id="ui.uiDropDown.3rdMenuItem" />
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#/">
          <IntlMessages id="ui.uiDropDown.clickMe" /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
export default DropDownTrigger;
