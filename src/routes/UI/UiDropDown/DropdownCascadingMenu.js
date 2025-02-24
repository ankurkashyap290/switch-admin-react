import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

const SubMenu = Menu.SubMenu;

class DropdownCascadingMenu extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <IntlMessages id="ui.uiDropDown.1stMenuItem" />
        </Menu.Item>
        <Menu.Item>
          <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
        </Menu.Item>
        <SubMenu title="sub menu">
          <Menu.Item>
            <IntlMessages id="ui.uiDropDown.3rdMenuItem" />
          </Menu.Item>
          <Menu.Item>
            <IntlMessages id="ui.uiDropDown.4thMenuItem" />
          </Menu.Item>
        </SubMenu>
        <SubMenu title="disabled sub menu" disabled>
          <Menu.Item>
            {' '}
            <IntlMessages id="ui.uiDropDown.5thMenuItem" />
          </Menu.Item>
          <Menu.Item>
            {' '}
            <IntlMessages id="ui.uiDropDown.6thMenuItem" />
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#/">
          <IntlMessages id="ui.uiDropDown.cascadingMenu" /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
export default DropdownCascadingMenu;
