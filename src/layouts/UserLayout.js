import React from 'react';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
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

class UserLayout extends React.PureComponent {
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
        <div className="userLayoutContainer">
          {// --removeGTM
          process.env.NODE_ENV === 'production' ? (
            <GoogleTagManager gtmId={siteConfig.gtmId} />
          ) : null
          // --removeGTM-->
          }
          <div className="contentGrid">
            <div className="userLayoutHeader">
              <Link to="/">
                <img alt="logo" className="userLayoutLogo" src={logo} />
                {/* <span className=title}>Admin Roles Theme</span> */}
              </Link>
            </div>

            <div className="contentUserLayout">
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
            </div>
            <AppFooter className="footer" links={links} copyright />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
