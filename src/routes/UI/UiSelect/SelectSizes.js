import React from 'react';
import { Select, Radio } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const { Option } = Select;

class SelectSizes extends React.Component {
  state = {
    size: 'default',
  };

  handleChange = value => {
    console.log(`Selected: ${value}`);
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const children = [];
    for (let i = 10; i < 36; i += 1) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">
            <IntlMessages id="ui.uiSelect.large" />
          </Radio.Button>
          <Radio.Button value="default">
            <IntlMessages id="ui.uiSelect.default" />
          </Radio.Button>
          <Radio.Button value="small">
            <IntlMessages id="ui.uiSelect.small" />
          </Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Select size={size} defaultValue="a1" onChange={this.handleChange} style={{ width: 200 }}>
          {children}
        </Select>
        <br />
        <Select
          mode="default"
          size={size}
          defaultValue="a1"
          onChange={this.handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={this.handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
      </div>
    );
  }
}
export default SelectSizes;
