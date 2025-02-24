import React from 'react';
import { TimePicker } from 'antd';

class TimePicker12Hours extends React.Component {
  onChange = (time, timeString) => {
    console.log(time, timeString);
  };

  render() {
    return (
      <div>
        <TimePicker use12Hours onChange={this.onChange} />
        <TimePicker use12Hours format="h:mm:ss A" onChange={this.onChange} />
        <TimePicker use12Hours format="h:mm a" onChange={this.onChange} />
      </div>
    );
  }
}
export default TimePicker12Hours;
