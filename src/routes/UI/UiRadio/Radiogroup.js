import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Radiogroup extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <RadioGroup onChange={this.onChange} value={value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}
export default Radiogroup;
