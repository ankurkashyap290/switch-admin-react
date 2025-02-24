import React, { PureComponent } from 'react';
import { Layout, Menu, Icon, Affix } from 'antd';
import pathToRegexp from 'path-to-regexp';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import WindowResizeListener from 'react-window-size-listener';
import { urlToList } from '../Misc/pathTools';
import IntlMessages from '../Misc/intlMessages';
import { siteConfig } from '../../configs/app.config';

const { Sider } = Layout;
const { SubMenu } = Menu;

const getIcon = icon => {
  icon = icon || null;
  if (typeof icon === 'string' && icon.indexOf('http') === 0) {
    return <img src={icon} alt="icon" className="icon" />;
  }
  if (typeof icon === 'string') {
    return <Icon type={icon} />;
  }
  return icon;
};

export const getMenuMatchKeys = (flatMenuKeys, path) => {
  return flatMenuKeys.filter(item => {
    return pathToRegexp(item).test(path);
  });
};

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      winHeight: '100vH',
      openKeys: [],
      menus: [],
      flatMenuKeys: [],
    };
  }

  componentDidMount() {
    const { menuData } = this.props;
    const openKeys = this.getDefaultCollapsedSubMenus(this.props);
    const flatMenuKeys = this.getFlatMenuKeys(menuData);
    this.setState({ menus: menuData, openKeys, flatMenuKeys });
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = this.props;
    if (nextProps.location.pathname !== pathname) {
      this.setState({
        openKeys: this.getDefaultCollapsedSubMenus(nextProps),
      });
    }
  }

  /**
   * Convert pathname to openKeys
   * /list/search/articles = > ['list','/list/search']
   * @param  props
   */
  getDefaultCollapsedSubMenus(props) {
    const {
      location: { pathname },
    } = props || this.props;
    const { flatMenuKeys } = this.state;

    return urlToList(pathname)
      .map(item => {
        return getMenuMatchKeys(flatMenuKeys || [], item)[0];
      })
      .filter(item => item);
  }

  /**
   * Recursively flatten the data
   * [{path:string},{path:string}] => {path,path2}
   * @param  menus
   */
  getFlatMenuKeys(menus) {
    let keys = [];
    menus.forEach(item => {
      if (item.children) {
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      }
      keys.push(item.path);
    });
    return keys;
  }

  getMenuItemPath = item => {
    const itemPath = this.conversionPath(item.path);
    const icon = getIcon(item.icon);
    const { target, id } = item;

    const { location, isMobile, onCollapse } = this.props;
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>
            <IntlMessages id={`siderMenu.${id}`} />
          </span>
        </a>
      );
    }
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === location.pathname}
        onClick={
          isMobile
            ? () => {
                onCollapse(true);
              }
            : undefined
        }
      >
        {icon}
        <span>
          <IntlMessages id={`siderMenu.${id}`} />
        </span>
      </Link>
    );
  };

  getSubMenuOrItem = (item, siderMenuTheme) => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children, siderMenuTheme);
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            className={`${siderMenuTheme}SubMenu`}
            title={
              item.icon ? (
                <span>
                  {getIcon(item.icon)}
                  <span>
                    <IntlMessages id={`siderMenu.${item.id}`} />
                  </span>
                </span>
              ) : (
                item.name
              )
            }
            onTitleClick={({ key }) => {
              console.log(`${key} sunMenu Clicked`);
            }}
            key={item.path}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return (
        <Menu.Item key={item.path} disabled={item.disabled}>
          {this.getMenuItemPath(item)}
        </Menu.Item>
      );
    }
  };

  getNavMenuItems = (menusData, siderMenuTheme) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => {
        const ItemDom = this.getSubMenuOrItem(item, siderMenuTheme);

        return ItemDom;
      })
      .filter(item => !!item);
  };

  // Get the currently selected menu
  getSelectedMenuKeys = () => {
    const {
      location: { pathname },
    } = this.props;
    const { flatMenuKeys } = this.state;
    return urlToList(pathname).map(itemPath => getMenuMatchKeys(flatMenuKeys, itemPath).pop());
  };

  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  };

  isMainMenu = key => {
    const { menus } = this.state;
    return menus.some(item => key && (item.key === key || item.path === key));
  };

  handleOpenChange = openKeys => {
    const lastOpenKey = openKeys[openKeys.length - 1];
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
    });
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  render() {
    const {
      logo,
      collapsed,
      themeColor,
      location: { pathname },
      onCollapse,
    } = this.props;
    const { openKeys } = this.state;

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed
      ? {}
      : {
          openKeys,
        };
    // if pathname can't match, use the nearest parent's key
    let selectedKeys = this.getSelectedMenuKeys(pathname);
    if (!selectedKeys.length) {
      selectedKeys = [openKeys[openKeys.length - 1]];
    }

    // let siderMenuTheme = 'dark';
    // if (theme.siderMenu && theme.siderMenu.themeColor) {
    //   siderMenuTheme = theme.siderMenu.themeColor;
    // }

    // let siderLogoTheme = 'white';
    // if (theme.siderLogo && theme.siderLogo.themeColor) {
    //   siderLogoTheme = theme.siderLogo.themeColor;
    // }

    // let menuTheme = 'dark';
    // if (theme.siderMenu && theme.siderMenu.theme) {
    //   menuTheme = theme.siderMenu.theme;
    // }
    // let menuMode = 'inline';
    // if (theme.siderMenu && theme.siderMenu.menuMode) {
    //   /* eslint-disable prefer-destructuring */
    //   menuMode = theme.siderMenu.menuMode;
    // }
    const { winHeight, menus } = this.state;
    return (
      <div
        className="base"
        // styles[`${siderMenuTheme}Menu`],
        // styles[`${siderLogoTheme}Logo`]
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          onCollapse={onCollapse}
          width={256}
          className="sider"
        >
          <Affix style={{ zIndex: '10' }}>
            <div className="logo" key="logo" id="siteLogo">
              <Link to="/">
                <img src={logo} alt="logo" />
                <h1 style={{ fontSize: '16px' }}>{siteConfig.siteName}</h1>
              </Link>
            </div>
          </Affix>
          <WindowResizeListener
            onResize={windowSize => {
              this.setState({ winHeight: windowSize.windowHeight });
            }}
          />
          <div className="sideMenu" id="SiderMenu">
            <Scrollbars style={{ height: winHeight }} renderThumbVertical={this.renderThumb}>
              <Menu
                key="Menu"
                theme={themeColor ? 'dark' : 'light'}
                mode="inline"
                {...menuProps}
                onOpenChange={this.handleOpenChange}
                selectedKeys={selectedKeys}
                style={{
                  padding: '16px 0',
                  marginBottom: '100px',
                  width: '100%',
                }}
              >
                {this.getNavMenuItems(menus, '')}
              </Menu>
            </Scrollbars>
          </div>
        </Sider>
      </div>
    );
  }
}
