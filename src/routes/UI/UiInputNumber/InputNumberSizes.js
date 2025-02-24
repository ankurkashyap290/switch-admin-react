import React from 'react';
import { InputNumber } from 'antd';

class InputNumberSizes extends React.Component {
  onChange = value => {
    console.log('changed', value);
  };

  render() {
    return (
      <div>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
      </div>
    );
  }
}
export default InputNumberSizes;
