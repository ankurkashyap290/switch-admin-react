import React from 'react';
import { Menu, Icon, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const SubMenu = Menu.SubMenu;

class MenuCollapsedInline extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div style={{ width: 240 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>
              <IntlMessages id="ui.option" /> 1
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>
              <IntlMessages id="ui.option" /> 2
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>
              <IntlMessages id="ui.option" /> 3
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>
                  <IntlMessages id="ui.option" /> 4
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
            <Menu.Item key="7">
              <IntlMessages id="ui.option" /> 7
            </Menu.Item>
            <Menu.Item key="8">
              <IntlMessages id="ui.option" /> 8
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
            <Menu.Item key="9">
              <IntlMessages id="ui.option" /> 9
            </Menu.Item>
            <Menu.Item key="10">
              <IntlMessages id="ui.option" /> 10
            </Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">
                <IntlMessages id="ui.option" /> 11
              </Menu.Item>
              <Menu.Item key="12">
                <IntlMessages id="ui.option" /> 12
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default MenuCollapsedInline;
