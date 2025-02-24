import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownHidingMenu extends React.Component {
  state = {
    visible: false,
  };

  handleMenuClick = e => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = flag => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <IntlMessages id="ui.uiDropDown.clickMeNotClose" />
        </Menu.Item>
        <Menu.Item key="2">
          <IntlMessages id="ui.uiDropDown.clickMeNotClose" />
        </Menu.Item>
        <Menu.Item key="3">
          <IntlMessages id="ui.uiDropDown.clickMeToClose" />
        </Menu.Item>
      </Menu>
    );
    const { visible } = this.state;
    return (
      <Dropdown overlay={menu} onVisibleChange={this.handleVisibleChange} visible={visible}>
        <a className="ant-dropdown-link" href="#/">
          <IntlMessages id="ui.uiDropDown.hoverMe" /> <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
export default DropDownHidingMenu;
