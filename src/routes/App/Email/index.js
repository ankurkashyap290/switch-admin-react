import React from 'react';
import { connect } from 'react-redux';
import EmailApp from '../../../components/Email';

class Email extends React.Component {
  render() {
    const {
      theme: { emailLayout, breadcrumbVisible },
    } = this.props;

    return <EmailApp emailLayout={emailLayout} breadcrumbVisible={breadcrumbVisible} />;
  }
}

export default connect(
  state => ({
    theme: state.theme.toJS(),
  }),
  {}
)(Email);
