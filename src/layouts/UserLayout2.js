import React from 'react';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import { Col } from 'antd';
import AppFooter from '../components/AppFooter';
// import logo from '../assets/switchadmin-logo-clear1.png';
import logo from '../assets/mindzadmin-logo6.png';
import { getRoutes } from '../utils';
import GoogleTagManager from '../components/Misc/GoogleTagManager';
import { getRouterData } from '../configs/app.router.config';
import { siteConfig } from '../configs/app.config';

// --removeGTM

// --removeGTM-->

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

const routerData = getRouterData();

class UserLayout2 extends React.PureComponent {
  getPageTitle() {
    const { location } = this.props;

    const { pathname } = location;

    let title = siteConfig.siteName;

    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - ${title}`;
    }

    return title;
  }

  render() {
    const { match } = this.props;
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className="container">
          {// --removeGTM
          process.env.NODE_ENV === 'production' ? (
            <GoogleTagManager gtmId={siteConfig.gtmId} />
          ) : null
          // --removeGTM-->
          }
          <Col span={18} className="loginImage" />
          <Col span={6} className="form">
            <div className="header">
              <Link to="/">
                <img alt="logo" className="logo" src={logo} />
                {/* <span className=title}>Admin Roles Theme</span> */}
              </Link>
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from="/user" to="/user/login" />
            </Switch>
            <AppFooter className="footer" links={links} copyright />
          </Col>
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout2;
