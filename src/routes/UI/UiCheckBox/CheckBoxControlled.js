import React from 'react';
import { Checkbox, Button } from 'antd';

class CheckBoxControlled extends React.Component {
  state = {
    checked: true,
    disabled: false,
  };

  toggleChecked = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  toggleDisable = () => {
    const { disabled } = this.state;
    this.setState({ disabled: !disabled });
  };

  onChange = e => {
    console.log('checked = ', e.target.checked);
    this.setState({
      checked: e.target.checked,
    });
  };

  render() {
    const { checked, disabled } = this.state;
    const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
    return (
      <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox checked={checked} disabled={disabled} onChange={this.onChange}>
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {!checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button
            style={{ marginLeft: '10px' }}
            type="primary"
            size="small"
            onClick={this.toggleDisable}
          >
            {!disabled ? 'Disable' : 'Enable'}
          </Button>
        </p>
      </div>
    );
  }
}
export default CheckBoxControlled;
