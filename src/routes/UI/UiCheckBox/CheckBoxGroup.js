import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

class CheckBoxGroup extends React.Component {
  onChange = checkedValues => {
    console.log('checked = ', checkedValues);
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
    return (
      <div>
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
        <br />
        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />
        <br />
        <CheckboxGroup
          options={optionsWithDisabled}
          disabled
          defaultValue={['Apple']}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
export default CheckBoxGroup;
