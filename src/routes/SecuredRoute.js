import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { validateRoles } from '../utils/tokenFunctions';

class SecuredRoute extends React.Component {
  state = {
    authLoaded: false,
    isAuthorized: false,
  };

  componentDidMount() {
    const { roles } = this.props;
    const newState = {
      authLoaded: true,
    };
    newState.isAuthorized = roles && roles.length ? validateRoles(roles) : true; // if no role on node it means allowed
    this.setState(newState);
  }

  render() {
    const { component: Component, render, noMatch, roles, ...rest } = this.props;
    const { authLoaded, isAuthorized } = this.state;
    return !authLoaded ? (
      <div>Loading...</div>
    ) : isAuthorized ? (
      <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
    ) : (
      <Route {...rest} render={() => <Redirect to={{ pathname: noMatch }} />} />
    );
  }
}

export default SecuredRoute;
