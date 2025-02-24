/* eslint-disable no-shadow */
import React from 'react';
import Menu from '../../UiElements/menu';
import Icon from '../../UiElements/icon';

const { SubMenu } = Menu;

class NavBar extends React.Component {
  getLeftNavbar = () => {
    const children = [];
    const { menuItems, textColor } = this.props;
    let tempMenu = null;
    menuItems.map(item => {
      if (item.subMenu) {
        tempMenu = (
          <SubMenu
            title={
              <span>
                <Icon type={item.icon} /> {item.name}
              </span>
            }
          >
            {this.getSubMenuItem(item.subMenu)}
          </SubMenu>
        );
      } else {
        tempMenu = (
          <Menu.Item key={item.id}>
            <a href={item.path} style={{ color: textColor }}>
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
        <Menu.Item key={item.id}>
          <a href={item.path}>
            <Icon type={item.icon} />

            {item.name}
          </a>
        </Menu.Item>
      )
    );
    return children;
  };

  render() {
    const {
      children,
      SiderMenuCollapsed,
      SiderMenuCollapsedOnClick,
      backgroundColor,
      textColor,
      direction,
      fixedHeader,
    } = this.props;

    return (
      <div className="msaNavBar" style={{ backgroundColor, color: textColor }}>
        <Icon
          className="trigger"
          type={
            direction === 'rtl'
              ? SiderMenuCollapsed
                ? 'menu-unfold'
                : 'menu-fold'
              : SiderMenuCollapsed
              ? 'menu-fold'
              : 'menu-unfold'
          }
          rotate={180}
          onClick={() => {
            SiderMenuCollapsedOnClick();
          }}
          style={{ color: textColor }}
        />
        <div
          style={{
            display: 'inline-block',
            float: direction === 'rtl' ? 'left' : 'right',
            padding: fixedHeader
              ? SiderMenuCollapsed
                ? '0px 80px 0px 0px'
                : '0px 256px 0px 0px '
              : '0px',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
export default NavBar;
