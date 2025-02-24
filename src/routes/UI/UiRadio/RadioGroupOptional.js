import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class RadioGroupOptional extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  };

  onChange1 = e => {
    this.setState({
      value1: e.target.value,
    });
  };

  onChange2 = e => {
    this.setState({
      value2: e.target.value,
    });
  };

  onChange3 = e => {
    this.setState({
      value3: e.target.value,
    });
  };

  render() {
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];
    const { value1, value2, value3 } = this.state;
    return (
      <div>
        <RadioGroup options={plainOptions} onChange={this.onChange1} value={value1} />
        <RadioGroup options={options} onChange={this.onChange2} value={value2} />
        <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={value3} />
      </div>
    );
  }
}
export default RadioGroupOptional;
