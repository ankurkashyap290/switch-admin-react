import React from 'react';
import { InputNumber, Button } from 'antd';
import IntlMessages from '../../../components/utils/intlMessages';

class InputNumberDisabled extends React.Component {
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
        <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">
            <IntlMessages id="ui.uiInputNumber.toggleDisabled" />
          </Button>
        </div>
      </div>
    );
  }
}
export default InputNumberDisabled;
