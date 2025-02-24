import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownOther extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a target="_blank" rel="noopener noreferrer" href="#/">
            <IntlMessages id="ui.uiDropDown.1stMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="#/">
            <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
          <IntlMessages id="ui.uiDropDown.3rdMenuItemDisable" />
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#/">
          <IntlMessages id="ui.uiDropDown.hoverMe" /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
export default DropDownOther;
