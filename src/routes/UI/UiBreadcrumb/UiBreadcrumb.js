import React from 'react';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Tabs, Breadcrumb, Icon, Alert } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import IntlMessages from '../../../components/Misc/intlMessages';

const TabPane = Tabs.TabPane;

class UiBreadcrumb extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Breadcrumbs/>" wrapperClassName="componentsBreadcrumbDemo">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiBreadcrumbBasic />
          </TabPane>
          <TabPane tab="With Icon" key="2">
            <UiBreadcrumbWithIcon />
          </TabPane>
          <TabPane tab="Configuring the Separator" key="3">
            <UiBreadcrumbConfiguringSeparator />
          </TabPane>
          <TabPane tab="Router Integration" key="4">
            <UiBreadcrumbRouterIntegration />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiBreadcrumb;

const BreadcrumbBasic = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <IntlMessages id="ui.uiBreadCrumb.home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#a">
          <IntlMessages id="ui.uiBreadCrumb.appCenter" />
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="#a">
          <IntlMessages id="ui.uiBreadCrumb.appList" />
        </a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <IntlMessages id="ui.uiBreadCrumb.application" />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const UiBreadcrumbBasic = UiBoxC(
  'Basic Usage',
  `The most basic usage.
                                  `,
  BreadcrumbBasic
);

const BreadcrumbWithIcon = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user" />
        <span>
          <IntlMessages id="ui.uiBreadCrumb.appList" />
        </span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <IntlMessages id="ui.uiBreadCrumb.application" />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const UiBreadcrumbWithIcon = UiBoxC(
  'With Icon',
  `The icon should be placed in front of the text..
                                    `,
  BreadcrumbWithIcon
);

const BreadcrumbConfiguringSeparator = () => {
  return (
    <Breadcrumb separator=">">
      <Breadcrumb.Item>
        <IntlMessages id="ui.uiBreadCrumb.home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <IntlMessages id="ui.uiBreadCrumb.appCenter" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <IntlMessages id="ui.uiBreadCrumb.appList" />
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <IntlMessages id="ui.uiBreadCrumb.application" />
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const UiBreadcrumbConfiguringSeparator = UiBoxC(
  'Configuring the separator',
  `The separator can be customized by setting the separator property: separator=">".
                                      `,
  BreadcrumbConfiguringSeparator
);

const Apps = () => (
  <ul className={['app-list']}>
    <li>
      <Link to="/apps/1">
        <IntlMessages id="ui.uiBreadCrumb.app1" />
      </Link>
      ：
      <Link to="/apps/1/detail">
        <IntlMessages id="ui.uiBreadCrumb.detail" />
      </Link>
    </li>
    <li>
      <Link to="/apps/2">
        <IntlMessages id="ui.uiBreadCrumb.app2" />
      </Link>
      ：
      <Link to="/apps/2/detail">
        <IntlMessages id="ui.uiBreadCrumb.detail" />
      </Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = withRouter(props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">
        <IntlMessages id="ui.uiBreadCrumb.home" />
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className={['demo-nav']}>
        <Link to="/">
          <IntlMessages id="ui.uiBreadCrumb.home" />
        </Link>
        <Link to="/apps">
          <IntlMessages id="ui.uiBreadCrumb.appList" />
        </Link>
      </div>
      <Switch>
        <Route path="/apps" component={Apps} />
        <Route
          render={() => (
            <span>
              <IntlMessages id="ui.uiBreadCrumb.homePage" />
            </span>
          )}
        />
      </Switch>
      <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
});

const BreadcrumbRouterIntegration = () => {
  return (
    <Router>
      <div
        style={{ margin: 20, padding: 30, width: '80%' }}
        className={`${['browser-mockup']} ${['with-url']}`}
      >
        <Home />
      </div>
    </Router>
  );
};

const UiBreadcrumbRouterIntegration = UiBoxC(
  'Other Router Integration',
  `Used together with react-router@4 or other router.
                                      `,
  BreadcrumbRouterIntegration
);
