import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class SelectWithSearch extends React.Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  handleBlur = () => {
    console.log('blur');
  };

  handleFocus = () => {
    console.log('focus');
  };

  render() {
    return (
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    );
  }
}
export default SelectWithSearch;
