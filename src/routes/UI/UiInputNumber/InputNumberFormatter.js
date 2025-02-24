import React from 'react';
import { InputNumber } from 'antd';

class InputNumberFormatter extends React.Component {
  onChange = value => {
    console.log('changed', value);
  };

  render() {
    return (
      <div>
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChange}
        />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default InputNumberFormatter;
