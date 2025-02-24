import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class SelectValueOfItem extends React.Component {
  handleChange = value => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  };

  render() {
    return (
      <Select
        labelInValue
        defaultValue={{ key: 'lucy' }}
        style={{ width: 120 }}
        onChange={this.handleChange}
      >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
      </Select>
    );
  }
}
export default SelectValueOfItem;
