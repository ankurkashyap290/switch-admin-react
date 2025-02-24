import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import SecuredRoute from './SecuredRoute';
import { getRouterData } from '../configs/app.router.config';

class AppRoutes extends React.Component {
  render() {
    const { history, switchLocale, locale, direction } = this.props;
    const routerData = getRouterData();
    const UserLayout = routerData['/user'].component;
    const UserLayout1 = routerData['/user1'].component;
    const UserLayout2 = routerData['/user2'].component;

    // const HelpLayout = routerData["/help"].component;
    const AppLayout = routerData['/'].component;

    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/user1" component={UserLayout1} />
          <Route path="/user2" component={UserLayout2} />

          <SecuredRoute
            path="/"
            noMatch="/user/login"
            roles={['admin', 'guest', 'moderator']}
            render={props => (
              <AppLayout
                {...props}
                switchLocale={switchLocale}
                locale={locale}
                direction={direction}
              />
            )}
          />
        </Switch>
      </ConnectedRouter>
    );
  }
}
export default AppRoutes;
