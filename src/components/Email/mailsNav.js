import React from 'react';
import { Menu, Icon, Collapse } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import IntlMessages from '../Misc/intlMessages';

const { SubMenu } = Menu;
const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const Panel = Collapse.Panel;

class MailsNav extends React.Component {
  state = {
    collapsed: false,
  };

  menuItemClick = ({ key }) => {
    const { onMenuSelect } = this.props;
    onMenuSelect && onMenuSelect(key);
  };

  calculateHeight = () => {
    const { rootHeight } = this.props;
    const adjustHeight = rootHeight - 74;

    return adjustHeight;
  };

  calculateHeightSecond = () => {
    const { rootHeight } = this.props;
    const adjustHeight = (rootHeight - 228) / 2;
    return adjustHeight;
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const { collapsed } = this.state;
    const { activeKey, emailLayout } = this.props;

    return (
      <div className={emailLayout === 'default' ? 'mailsNav' : 'layoutOneMainNav'}>
        {emailLayout === 'default' ? (
          <Scrollbars
            style={{ height: this.calculateHeight() }}
            renderThumbVertical={this.renderThumb}
          >
            <Menu
              defaultSelectedKeys={[activeKey]}
              defaultOpenKeys={['sub1']}
              mode="inline"
              onClick={this.menuItemClick}
              inlineCollapsed={collapsed}
            >
              <Menu.Item key="inbox">
                <Icon type="inbox" />
                <span>
                  <IntlMessages id="email.inbox" />
                </span>
              </Menu.Item>
              <Menu.Item key="sent">
                <Icon type="export" />
                <span>
                  <IntlMessages id="email.sent" />
                </span>
              </Menu.Item>
              <Menu.Item key="draft">
                <Icon type="file" />
                &nbsp;
                <span>
                  <IntlMessages id="email.draft" />
                </span>
              </Menu.Item>
              <Menu.Item key="important">
                <Icon type="flag" />
                <span>
                  <IntlMessages id="email.important" />{' '}
                </span>
              </Menu.Item>
              <Menu.Item key="star">
                <Icon type="star" />
                <span>
                  <IntlMessages id="email.starred" />{' '}
                </span>
              </Menu.Item>
              <Menu.Item key="spam">
                <Icon type="minus-circle" />
                <span>
                  <IntlMessages id="email.spam" />
                </span>
              </Menu.Item>
              <Menu.Item key="trashed">
                <Icon type="delete" />
                <span>
                  <IntlMessages id="email.trash" />{' '}
                </span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="tag" />
                    <span>
                      <IntlMessages id="email.labels" />
                    </span>
                  </span>
                }
              >
                <Menu.Item key="work">
                  <Icon type="plus-circle" style={{ color: '#f62d51' }} />
                  <IntlMessages id="email.work" />
                </Menu.Item>
                <Menu.Item key="business">
                  <Icon type="plus-circle" style={{ color: '#2dce89' }} />
                  <IntlMessages id="email.business" />
                </Menu.Item>
                <Menu.Item key="family">
                  <Icon type="plus-circle" style={{ color: '#fb6340' }} />
                  <IntlMessages id="email.family" />
                </Menu.Item>
                <Menu.Item key="friend">
                  <Icon type="plus-circle" style={{ color: '#2962ff' }} />
                  <IntlMessages id="email.friend" />
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Scrollbars>
        ) : (
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (isActive ? <Icon type="minus" /> : <Icon type="plus" />)}
            expandIconPosition="right"
          >
            <Panel header="Folders" key="1" style={customPanelStyle}>
              <Scrollbars
                style={{ height: this.calculateHeightSecond() }}
                renderThumbVertical={this.renderThumb}
              >
                <Menu
                  defaultSelectedKeys={[activeKey]}
                  mode="inline"
                  onClick={this.menuItemClick}
                  inlineCollapsed={collapsed}
                >
                  <Menu.Item key="inbox">
                    <Icon type="inbox" />
                    <span>
                      <IntlMessages id="email.inbox" />
                    </span>
                  </Menu.Item>
                  <Menu.Item key="sent">
                    <Icon type="export" />
                    <span>
                      <IntlMessages id="email.sent" />
                    </span>
                  </Menu.Item>
                  <Menu.Item key="draft">
                    <Icon type="file" />
                    <span>
                      <IntlMessages id="email.draft" />
                    </span>
                  </Menu.Item>
                  <Menu.Item key="important">
                    <Icon type="flag" />
                    <span>
                      <IntlMessages id="email.important" />{' '}
                    </span>
                  </Menu.Item>
                  <Menu.Item key="star">
                    <Icon type="star" />
                    <span>
                      <IntlMessages id="email.starred" />{' '}
                    </span>
                  </Menu.Item>
                  <Menu.Item key="spam">
                    <Icon type="minus-circle" />
                    <span>
                      <IntlMessages id="email.spam" />
                    </span>
                  </Menu.Item>
                  <Menu.Item key="trashed">
                    <Icon type="delete" />
                    <span>
                      <IntlMessages id="email.trash" />{' '}
                    </span>
                  </Menu.Item>
                </Menu>
              </Scrollbars>
            </Panel>
            <Panel header={<IntlMessages id="email.labels" />} key="2" style={customPanelStyle}>
              <Scrollbars
                style={{ height: this.calculateHeightSecond() }}
                renderThumbVertical={this.renderThumb}
              >
                <Menu
                  defaultSelectedKeys={[activeKey]}
                  mode="inline"
                  onClick={this.menuItemClick}
                  inlineCollapsed={collapsed}
                >
                  <Menu.Item key="work">
                    <Icon type="plus-circle" style={{ color: '#f62d51' }} />
                    <IntlMessages id="email.work" />
                  </Menu.Item>
                  <Menu.Item key="business">
                    <Icon type="plus-circle" style={{ color: '#2dce89' }} />
                    <IntlMessages id="email.business" />
                  </Menu.Item>
                  <Menu.Item key="family">
                    <Icon type="plus-circle" style={{ color: '#fb6340' }} />
                    <IntlMessages id="email.family" />
                  </Menu.Item>
                  <Menu.Item key="friend">
                    <Icon type="plus-circle" style={{ color: '#2962ff' }} />
                    <IntlMessages id="email.friend" />
                  </Menu.Item>
                </Menu>
              </Scrollbars>
            </Panel>
          </Collapse>
        )}
      </div>
    );
  }
}

export default MailsNav;
