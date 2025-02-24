/* eslint-disable no-shadow */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
// import WindowResizeListener from 'react-window-size-listener';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import { Layout, Icon, message } from 'antd';
import Media from 'react-media';
import PropTypes from 'prop-types';
import SiderMenu from '../components/SiderMenu';
import logo from '../assets/switchadmin-logo-clear72.png';
import { getAppMenu } from '../configs/app.menu.config';
import { getRoutes } from '../utils';
import { getRouterData } from '../configs/app.router.config';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import IntlMessages from '../components/Misc/intlMessages';
import NotFound from '../routes/Exception/404';
import ThemeManager from '../components/ThemeManager';
import SecuredRoute from '../routes/SecuredRoute';
import { decodeToken } from '../utils/tokenFunctions';
import actions from '../redux/global/actions';

const { Content, Footer, Header } = Layout;
const routerData = getRouterData();
const { globalFetchNotices, globalClearNotices } = actions;
const redirectData = [];
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
        icon: item.icon ? `${item.icon}` : '',
      });
      item.children.forEach(children => {
        getRedirect(children);
      });
    }
  }
};

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

const links = [
  {
    key: 'help',

    title: 'help',
    href: '',
  },
  {
    key: 'privacy',

    title: 'privacy',
    href: '',
  },
  {
    key: 'terms',

    title: 'terms',
    href: '',
  },
];

const copyright = (
  <div>
    <IntlMessages id="copyright" /> <Icon type="copyright" /> 2018 MindzHub
  </div>
);

class AppLayout extends PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
    breadcrumbNameMap: PropTypes.object,
    direction: PropTypes.string,
  };

  state = {
    collapsed: false,
    menuData: [],
    // winWidth: '',
  };

  getChildContext() {
    const { location, direction } = this.props;
    /* eslint-disable react/destructuring-assignment */
    return {
      location,
      breadcrumbNameMap: routerData,
      direction,
    };
  }

  componentDidMount() {
    const menuData = getAppMenu();
    menuData.forEach(getRedirect);
    const { globalFetchNotices } = this.props;
    this.setState({ menuData });
    globalFetchNotices({
      payload: {},
    });
  }

  handleMenuCollapse = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed,
    });
  };

  handleNoticeClear = type => {
    const { globalClearNotices } = this.props;
    globalClearNotices({
      payload: type,
    });
    message.success(`Cleared ${type}`);
  };

  getBashRedirect = () => {
    // Redirect according to the url
    const urlParams = new URL(window.location.href);
    const redirect = urlParams.searchParams.get('redirect');
    // Remove the parameters in the url
    if (redirect) {
      urlParams.searchParams.delete('redirect');
      window.history.replaceState(null, 'redirect', urlParams.href);
    } else {
      return '/dashboard';
    }
    return redirect;
  };

  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'rgba(240,242,245,.5)',
      border: '1px solid rgba(0,0,0,.3)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  renderLayout = () => {
    const { collapsed, menuData } = this.state;
    const {
      location,
      match,
      isMobile,
      theme: { fixedHeader, fixedFooter, themeColor },
      switchLocale,
      locale,
      currentUser,
      global: { notices, notifyCount },
      direction,
    } = this.props;

    const bashRedirect = this.getBashRedirect();
    const allRoutes = getRoutes(match.path, routerData);
    //  const contentWidth = winWidth - (isMobile ? '0' : collapsed ? '80' : '256');

    return (
      <Layout>
        {/* <WindowResizeListener
          onResize={windowSize => {
            this.setState({
              winWidth: windowSize.windowWidth,
            });
          }}
        /> */}
        <SiderMenu
          themeColor={themeColor}
          logo={logo}
          menuData={menuData}
          collapsed={collapsed}
          location={location}
          isMobile={isMobile}
          onCollapse={this.handleMenuCollapse}
          direction={direction}
        />

        <Layout
          style={{
            height: '100vh', // this is what making scroll bar appear
            overflowX: 'hidden',
            overflowY: 'auto',

            position: 'relative',
          }}
        >
          <Header
            style={
              fixedHeader
                ? {
                    width: '100%',
                    zIndex: 99,
                    position: 'fixed',
                    // borderBottom: '1px solid #f2f0f5',
                  }
                : { position: 'static' }
            }
          >
            <AppHeader
              mainMenu={false}
              currentUser={currentUser}
              notificationBar
              logo={false}
              SiderMenuCollapsedOnClick={this.handleMenuCollapse}
              SiderMenuCollapsed={collapsed}
              fixed={fixedHeader}
              switchLocale={switchLocale}
              locale={locale}
              notices={notices}
              notifyCount={notifyCount}
              onClear={this.handleNoticeClear}
              direction={direction}
            />
          </Header>
          <Content
            style={
              fixedFooter
                ? { margin: '24px 24px 60px 24px', flexShrink: 0, flex: 'auto' }
                : { margin: '24px 24px 0', flexShrink: 0, flex: 'auto' }
            }
          >
            <Switch>
              {redirectData.map(item => (
                <Redirect key={item.from} exact from={item.from} to={item.to} />
              ))}
              {allRoutes.map(item => (
                <SecuredRoute
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  roles={item.authority}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/" to={bashRedirect} />
              <Route render={NotFound} />
            </Switch>
            <ThemeManager direction={direction} />
          </Content>
          <Footer
            style={
              fixedFooter
                ? { position: 'fixed', width: '100%', bottom: '0' }
                : { position: 'static' }
            }
          >
            <AppFooter links={links} copyright={copyright} />
          </Footer>
        </Layout>
      </Layout>
    );
  };

  render() {
    const { direction } = this.props;
    return (
      <DocumentTitle title="MindzAdmin">
        <ContainerQuery query={query}>
          {params => (
            <div style={{ direction }} className={classnames(params)}>
              {this.renderLayout()}
            </div>
          )}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

const fetchCurrentUser = function(state) {
  const currentUser =
    state.user && state.user.token
      ? decodeToken(state.user.token)
      : { name: 'admin', role: 'admin' };

  return currentUser;
};

export default connect(
  state => ({
    theme: state.theme.toJS(),
    currentUser: fetchCurrentUser(state),
    global: state.global.toJS(),
  }),
  { globalFetchNotices, globalClearNotices }
)(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <AppLayout {...props} isMobile={isMobile} />}
  </Media>
));
