import React from 'react';
import { Spin, Switch, Alert } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class SpinEmbedded extends React.Component {
  state = { loading: false };

  toggle = value => {
    this.setState({ loading: value });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Spin spinning={loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          <IntlMessages id="ui.uiSpin.loadingState" />
          <Switch checked={loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}
export default SpinEmbedded;
