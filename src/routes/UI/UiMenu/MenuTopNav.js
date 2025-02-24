import React from 'react';
import { Menu, Icon } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuTopNav extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />
          <IntlMessages id="ui.uiMenu.navigationOne" />
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          <IntlMessages id="ui.uiMenu.navigationTwo" />
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <Icon type="setting" />
              <IntlMessages id="ui.uiMenu.navigationThree" />
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">
              {' '}
              <IntlMessages id="ui.option" /> 1
            </Menu.Item>
            <Menu.Item key="setting:2">
              <IntlMessages id="ui.option" /> 2
            </Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">
              <IntlMessages id="ui.option" /> 3
            </Menu.Item>
            <Menu.Item key="setting:4">
              <IntlMessages id="ui.option" /> 4
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default MenuTopNav;
