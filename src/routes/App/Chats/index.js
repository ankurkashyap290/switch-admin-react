/* eslint-disable no-shadow */
import React from 'react';

import { connect } from 'react-redux';
import ChatApp from '../../../components/Chats/index';

class Chat extends React.Component {
  render() {
    const {
      theme: { chatLayout, breadcrumbVisible },
    } = this.props;

    return <ChatApp layout={chatLayout} breadcrumbVisible={breadcrumbVisible} />;
  }
}
export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {}
)(Chat);
