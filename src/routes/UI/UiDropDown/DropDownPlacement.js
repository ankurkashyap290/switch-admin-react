import React from 'react';
import { Menu, Dropdown, Button } from 'antd';

import IntlMessages from '../../../components/Misc/intlMessages';

class DropDownPlacement extends React.Component {
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
      <div>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>
            <IntlMessages id="ui.uiDropDown.bottomLeft" />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomCenter">
          <Button>
            <IntlMessages id="ui.uiDropDown.bottomCenter" />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button>
            <IntlMessages id="ui.uiDropDown.bottomRight" />
          </Button>
        </Dropdown>
        <br />
        <Dropdown overlay={menu} placement="topLeft">
          <Button>
            <IntlMessages id="ui.uiDropDown.topLeft" />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topCenter">
          <Button>
            <IntlMessages id="ui.uiDropDown.topCenter" />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="topRight">
          <Button>
            <IntlMessages id="ui.uiDropDown.topRight" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}
export default DropDownPlacement;
