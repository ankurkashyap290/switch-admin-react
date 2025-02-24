import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const SubMenu = Menu.SubMenu;

class MenuSwitchType extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  render() {
    const { mode, theme } = this.state;
    return (
      <div>
        <Switch onChange={this.changeMode} /> <IntlMessages id="ui.uiMenu.changeMode" />
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Switch onChange={this.changeTheme} />
        <IntlMessages id="ui.uiMenu.changeTheme" />
        <br />
        <br />
        <Menu
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
        >
          <Menu.Item key="1">
            <Icon type="mail" />
            <IntlMessages id="ui.uiMenu.navigationOne" />
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="calendar" />
            <IntlMessages id="ui.uiMenu.navigationTwo" />
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>
                  <IntlMessages id="ui.uiMenu.NavThree" />
                </span>
              </span>
            }
          >
            <Menu.Item key="3">
              <IntlMessages id="ui.option" /> 3
            </Menu.Item>
            <Menu.Item key="4">
              <IntlMessages id="ui.option" /> 4
            </Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">
                <IntlMessages id="ui.option" /> 5
              </Menu.Item>
              <Menu.Item key="6">
                <IntlMessages id="ui.option" /> 6
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="setting" />
                <span>
                  <IntlMessages id="ui.uiMenu.navFour" />
                </span>
              </span>
            }
          >
            <Menu.Item key="7">
              <IntlMessages id="ui.option" /> 7 Option 7
            </Menu.Item>
            <Menu.Item key="8">
              <IntlMessages id="ui.option" /> 8
            </Menu.Item>
            <Menu.Item key="9">
              <IntlMessages id="ui.option" /> 9
            </Menu.Item>
            <Menu.Item key="10">
              <IntlMessages id="ui.option" /> 10
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default MenuSwitchType;
