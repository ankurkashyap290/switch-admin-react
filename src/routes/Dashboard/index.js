import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../Exception/404';
import { getRouterData } from '../../configs/app.router.config';
import { getRoutes } from '../../utils';

const routerData = getRouterData();
export default class Dashboard extends PureComponent {
  render() {
    const { match } = this.props;
    const subRoutes = getRoutes(match.path, routerData);
    let Analytics = subRoutes.find(item => {
      return item.path === '/dashboard/analytics';
    });
    Analytics = Analytics ? Analytics.component : NotFound;
    return (
      <Switch>
        {subRoutes.map(item => (
          <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
        ))}
        <Route exact path="/dashboard" component={Analytics} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
