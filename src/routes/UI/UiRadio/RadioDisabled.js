import React from 'react';
import { Radio, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

class RadioDisabled extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    const { disabled } = this.state;
    this.setState({
      disabled: !disabled,
    });
  };

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Radio defaultChecked={false} disabled={disabled}>
          <IntlMessages id="ui.disabled" />
        </Radio>
        <br />
        <Radio defaultChecked disabled={disabled}>
          <IntlMessages id="ui.disabled" />
        </Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            <IntlMessages id="ui.toggleDisabled" />
          </Button>
        </div>
      </div>
    );
  }
}
export default RadioDisabled;
