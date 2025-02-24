/* eslint-disable no-shadow */
import React from 'react';

import { connect } from 'react-redux';
import TodoApp from '../../../components/Todos/index';

class Todo extends React.Component {
  render() {
    const {
      theme: { todoLayout, breadcrumbVisible },
    } = this.props;
    return <TodoApp layout={todoLayout} breadcrumbVisible={breadcrumbVisible} />;
  }
}
export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {}
)(Todo);
