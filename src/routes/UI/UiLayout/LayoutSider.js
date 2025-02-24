import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class LayoutSider extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          className="isomorphicSidebar"
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>
                {' '}
                <IntlMessages id="ui.option" /> 1
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>
                {' '}
                <IntlMessages id="ui.option" /> 2
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>
                    <IntlMessages id="ui.uiLayout.user" />
                  </span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>
                    <IntlMessages id="ui.uiLayout.team" />
                  </span>
                </span>
              }
            >
              <Menu.Item key="6">
                <IntlMessages id="ui.uiLayout.team" /> 1
              </Menu.Item>
              <Menu.Item key="8">
                <IntlMessages id="ui.uiLayout.team" /> 2
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>
                <IntlMessages id="ui.uiLayout.file" />
              </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
                <IntlMessages id="user" />
              </Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default LayoutSider;
