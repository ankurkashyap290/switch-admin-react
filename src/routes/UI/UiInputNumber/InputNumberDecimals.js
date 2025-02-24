import React from 'react';
import { InputNumber } from 'antd';

class InputNumberDecimals extends React.Component {
  onChange = value => {
    console.log('changed', value);
  };

  render() {
    return <InputNumber min={0} max={10} step={0.1} onChange={this.onChange} />;
  }
}
export default InputNumberDecimals;
