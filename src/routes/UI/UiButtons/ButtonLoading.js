import React from 'react';
import { Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class ButtonLoading extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const { loading, iconLoading } = this.state;
    return (
      <span>
        <Button type="primary" loading>
          <IntlMessages id="ui.uiButton.loading" />
        </Button>
        &nbsp;
        <Button type="primary" size="small" loading>
          <IntlMessages id="ui.uiButton.loading" />
        </Button>
        <br />
        <br />
        <Button type="primary" loading={loading} onClick={this.enterLoading}>
          <IntlMessages id="ui.uiButton.clickMe" />
        </Button>
        &nbsp;
        <Button
          type="primary"
          icon="poweroff"
          loading={iconLoading}
          onClick={this.enterIconLoading}
        >
          <IntlMessages id="ui.uiButton.clickMe" />
        </Button>
        <br />
        <br />
        <Button shape="circle" loading />
        &nbsp;
        <Button type="primary" shape="circle" loading />
      </span>
    );
  }
}
export default ButtonLoading;
