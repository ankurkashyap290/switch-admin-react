import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const SubMenu = Menu.SubMenu;

class MenuThemes extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { theme, current } = this.state;
    return (
      <div>
        <Switch
          checked={theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={theme}
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>
                  <IntlMessages id="ui.uiMenu.navigationOne" />
                </span>
              </span>
            }
          >
            <Menu.Item key="1">
              <IntlMessages id="ui.option" /> 1
            </Menu.Item>
            <Menu.Item key="2">
              <IntlMessages id="ui.option" /> 2
            </Menu.Item>
            <Menu.Item key="3">
              <IntlMessages id="ui.option" /> 3
            </Menu.Item>
            <Menu.Item key="4">
              <IntlMessages id="ui.option" /> 4
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>
                  <IntlMessages id="ui.uiMenu.navigationTwo" />
                </span>
              </span>
            }
          >
            <Menu.Item key="5">
              <IntlMessages id="ui.option" /> 5
            </Menu.Item>
            <Menu.Item key="6">
              <IntlMessages id="ui.option" /> 6
            </Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">
                <IntlMessages id="ui.option" /> 7
              </Menu.Item>
              <Menu.Item key="8">
                <IntlMessages id="ui.option" /> 8
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>
                  <IntlMessages id="ui.uiMenu.NavThree" />
                </span>
              </span>
            }
          >
            <Menu.Item key="9">
              <IntlMessages id="ui.option" /> 9
            </Menu.Item>
            <Menu.Item key="10">
              <IntlMessages id="ui.option" /> 10
            </Menu.Item>
            <Menu.Item key="11">
              <IntlMessages id="ui.option" /> 11
            </Menu.Item>
            <Menu.Item key="12">
              <IntlMessages id="ui.option" /> 12
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default MenuThemes;
