/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Icon, Menu } from 'antd';
import actions from '../../redux/user/actions';

const { SubMenu } = Menu;
const { userLogout, userLockScreen } = actions;

class ProfileBar extends React.Component {
  getMenuItem = () => {
    const children = [];
    const { utilityMenu } = this.props;
    let tempMenu = null;
    utilityMenu.map(item => {
      if (item.subMenu) {
        tempMenu = <SubMenu title={item.name}>{this.getSubMenuItem(item.subMenu)}</SubMenu>;
      } else {
        tempMenu = (
          <Menu.Item key={item.id}>
            <a href={item.path}>
              <Icon type={item.icon} />
              {item.name}
            </a>
          </Menu.Item>
        );
      }

      return children.push(tempMenu);
    });
    return children;
  };

  getSubMenuItem = subMenuItems => {
    const children = [];
    subMenuItems.map(item =>
      children.push(
        <Menu.Item key={item.id} onClick={() => this.handleMenuClick(item.id)}>
          {/* <a href={item.path}> */}
          <Icon type={item.icon} />
          {item.name}
          {/* </a> */}
        </Menu.Item>
      )
    );
    return children;
  };

  handleMenuClick = key => {
    if (key === 'signOut') {
      const { userLogout } = this.props;
      userLogout({
        payload: {},
      });
    }
    if (key === 'lock') {
      const { userLockScreen } = this.props;
      userLockScreen({
        payload: {},
      });
    }
  };

  render() {
    const { profileMenuData, textColor } = this.props;
    return (
      <Menu
        mode="horizontal"
        className="profileMenu"
        style={{ backgroundColor: 'transparent', textColor }}
      >
        <SubMenu
          title={
            <span>
              <Avatar
                src="https://images.unsplash.com/photo-1493136289900-28660d718589?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=480&h=480&fit=crop&ixid=eyJhcHBfaWQiOjF9"
                style={{ marginRight: '5px', marginBottom: '5px', height: '40px', width: '40px' }}
              />
            </span>
          }
        >
          {this.getSubMenuItem(profileMenuData)}
        </SubMenu>
      </Menu>
    );
  }
}
export default connect(
  state => ({
    ...state.user,
  }),
  { userLogout, userLockScreen }
)(ProfileBar);
