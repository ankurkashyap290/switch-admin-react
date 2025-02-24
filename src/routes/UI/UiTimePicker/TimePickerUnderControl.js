import React from 'react';
import { TimePicker } from 'antd';

class TimePickerUnderControl extends React.Component {
  state = {
    value: null,
  };

  onChange = time => {
    this.setState({ value: time });
  };

  render() {
    const { value } = this.state;
    return <TimePicker value={value} onChange={this.onChange} />;
  }
}
export default TimePickerUnderControl;
