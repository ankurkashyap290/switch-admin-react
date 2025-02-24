import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class SelectAutomaticTokenization extends React.Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    const children = [];
    for (let i = 10; i < 36; i += 1) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    return (
      <Select
        mode="tags"
        style={{ width: '100%' }}
        onChange={this.handleChange}
        tokenSeparators={[',']}
      >
        {children}
      </Select>
    );
  }
}
export default SelectAutomaticTokenization;
