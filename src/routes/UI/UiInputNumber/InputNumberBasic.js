import React from 'react';
import { InputNumber } from 'antd';

class InputNumberBasic extends React.Component {
  onChange = value => {
    console.log('changed', value);
  };

  render() {
    return <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />;
  }
}
export default InputNumberBasic;
