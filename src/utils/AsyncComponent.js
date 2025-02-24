import React from 'react';
import { asyncComponent } from 'react-async-component';
import Loading from '../components/Loading';

const NotFoundResolve = ({ name }) => <div>Not Found {name}</div>;
const DefaultLoadingComponent = () => <Loading />;
const DefaultErrorComponent = ({ error }) => <div>{error.message}</div>;

const AsyncComponent = config => {
  const { name, LoadingComponent, ErrorComponent, resolve } = config;
  return asyncComponent({
    name,
    resolve: resolve || NotFoundResolve,
    LoadingComponent: LoadingComponent || DefaultLoadingComponent,
    ErrorComponent: ErrorComponent || DefaultErrorComponent,
  });
};

export default AsyncComponent;
