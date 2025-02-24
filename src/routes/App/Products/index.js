import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getRoutes } from '../../../utils';
import { getRouterData } from '../../../configs/app.router.config';
import NotFound from '../../Exception/404';

const routerData = getRouterData();
export default class Products extends PureComponent {
  render() {
    const { match } = this.props;
    const subRoutes = getRoutes(match.path, routerData);

    let ProductList = subRoutes.find(item => {
      return item.path === '/app/products/list';
    });
    ProductList = ProductList ? ProductList.component : NotFound;
    return (
      <Switch>
        {subRoutes.map(item => (
          <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
        ))}
        <Route exact path="/app/products" component={ProductList} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}
