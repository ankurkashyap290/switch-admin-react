import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

class SelectOptionGroup extends React.Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
        <OptGroup label="Manager">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
        </OptGroup>
        <OptGroup label="Engineer">
          <Option value="Abc">abc</Option>
        </OptGroup>
      </Select>
    );
  }
}
export default SelectOptionGroup;
