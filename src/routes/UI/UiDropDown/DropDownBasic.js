import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownBasic extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#/">
            <IntlMessages id="ui.uiDropDown.1stMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#/">
            <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="#/">
            <IntlMessages id="ui.uiDropDown.3rdMenuItem" />
          </a>
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
export default DropDownBasic;
