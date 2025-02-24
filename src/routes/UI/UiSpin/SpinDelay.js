import React from 'react';
import { Spin, Switch, Alert } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class SpinDelay extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
        style={{ marginBottom: 16 }}
      />
    );
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading} delay={500}>
          {container}
        </Spin>
        <IntlMessages id="ui.uiSpin.loadingState" />
        <Switch checked={loading} onChange={this.toggle} />
      </div>
    );
  }
}
export default SpinDelay;
