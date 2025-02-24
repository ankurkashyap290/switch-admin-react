import React from 'react';
import { Input, Icon, Select } from 'antd';

const Option = Select.Option;

class InputPrePostTab extends React.Component {
  selectBefore = (
    <Select defaultValue="Http://" style={{ width: 80 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </Select>
  );

  selectAfter = () => {
    return (
      <Select defaultValue=".com" style={{ width: 70 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input
            addonBefore={this.selectBefore}
            addonAfter={this.selectAfter()}
            defaultValue="mysite"
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
        </div>
      </div>
    );
  }
}
export default InputPrePostTab;
