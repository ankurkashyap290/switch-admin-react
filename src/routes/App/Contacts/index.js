import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getRoutes } from '../../../utils';
import { getRouterData } from '../../../configs/app.router.config';
import NotFound from '../../Exception/404';

const routerData = getRouterData();
export default class Contacts extends PureComponent {
  render() {
    const { match } = this.props;
    const subRoutes = getRoutes(match.path, routerData);
    const ContactList = subRoutes.find(item => {
      return item.path === '/app/contacts/list';
    });
    let ContactListCmp = NotFound;
    if (ContactList) {
      ContactListCmp = ContactList.component;
    }
    return (
      <Switch>
        {subRoutes.map(item => (
          <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
        ))}
        <Route exact path="/app/contacts" component={ContactListCmp} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
