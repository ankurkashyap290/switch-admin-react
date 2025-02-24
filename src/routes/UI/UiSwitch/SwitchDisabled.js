import React from 'react';
import { Switch, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class SwitchDisabled extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    const { disabled } = this.state;
    this.setState({
      disabled: !disabled,
    });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Switch disabled={disabled} />
        <br />
        <br />
        <Button type="primary" onClick={this.toggle}>
          <IntlMessages id="ui.toggleDisabled" />
        </Button>
      </div>
    );
  }
}
export default SwitchDisabled;
