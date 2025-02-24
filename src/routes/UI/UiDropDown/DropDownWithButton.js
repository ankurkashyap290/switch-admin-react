import React from 'react';
import { Menu, Dropdown, Icon, Button, message } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownWithButton extends React.Component {
  handleButtonClick = e => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };

  handleMenuClick = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <IntlMessages id="ui.uiDropDown.1stMenuItem" />
        </Menu.Item>
        <Menu.Item key="2">
          <IntlMessages id="ui.uiDropDown.2ndMenuItem" />
        </Menu.Item>
        <Menu.Item key="3">
          <IntlMessages id="ui.uiDropDown.3rdMenuItem" />
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown.Button onClick={this.handleButtonClick} overlay={menu}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button
          onClick={this.handleButtonClick}
          overlay={menu}
          disabled
          style={{ marginLeft: 8 }}
        >
          Dropdown
        </Dropdown.Button>
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 8 }}>
            <IntlMessages id="ui.uiDropDown.Button" /> <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}
export default DropDownWithButton;
