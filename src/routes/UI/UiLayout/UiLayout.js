import React from 'react';
import { Tabs, Layout, Menu, Breadcrumb, Icon } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/utils/intlMessages';
import LayoutSider from './LayoutSider';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class UiLayout extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <div>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Header Sider 2" key="1">
            <UiLayoutHeaderSider2 />
          </TabPane>
          <TabPane tab="Sider" key="2">
            <UiLayoutSider />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default UiLayout;

const LayoutHeaderSider2 = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <IntlMessages id="ui.uiLayout.nav" /> 1
          </Menu.Item>
          <Menu.Item key="2">
            <IntlMessages id="ui.uiLayout.nav" /> 2
          </Menu.Item>
          <Menu.Item key="3">
            <IntlMessages id="ui.uiLayout.nav" /> 3
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  Sub Nav 1
                </span>
              }
            >
              <Menu.Item key="1">
                {' '}
                <IntlMessages id="ui.option" /> 1
              </Menu.Item>
              <Menu.Item key="2">
                {' '}
                <IntlMessages id="ui.option" /> 2
              </Menu.Item>
              <Menu.Item key="3">
                {' '}
                <IntlMessages id="ui.option" /> 3
              </Menu.Item>
              <Menu.Item key="4">
                {' '}
                <IntlMessages id="ui.option" /> 4
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  Sub Nav 2
                </span>
              }
            >
              <Menu.Item key="5">
                {' '}
                <IntlMessages id="ui.option" /> 5
              </Menu.Item>
              <Menu.Item key="6">
                {' '}
                <IntlMessages id="ui.option" /> 6
              </Menu.Item>
              <Menu.Item key="7">
                {' '}
                <IntlMessages id="ui.option" /> 7
              </Menu.Item>
              <Menu.Item key="8">
                {' '}
                <IntlMessages id="ui.option" /> 8
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  Sub Nav 3
                </span>
              }
            >
              <Menu.Item key="9">
                {' '}
                <IntlMessages id="ui.option" /> 9
              </Menu.Item>
              <Menu.Item key="10">
                {' '}
                <IntlMessages id="ui.option" /> 10
              </Menu.Item>
              <Menu.Item key="11">
                {' '}
                <IntlMessages id="ui.option" /> 11
              </Menu.Item>
              <Menu.Item key="12">
                {' '}
                <IntlMessages id="ui.option" /> 12
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>
              <IntlMessages id="ui.uiLayout.home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <IntlMessages id="ui.uiLayout.list" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <IntlMessages id="ui.uiLayout.app" />
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <IntlMessages id="ui.uiLayout.content" />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const UiLayoutHeaderSider2 = UiBoxC(
  'Header and Sider 2',
  `Both the top navigation and the sidebar, commonly used in application site.
            `,
  LayoutHeaderSider2
);

const UiLayoutSider = UiBoxC(
  'Sider',
  `Two-columns layout. The sider menu can be collapsed when horizontal space is limited.
            `,
  LayoutSider
);
