import React from 'react';
import { Select } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const { Option } = Select;

class SelectBasic extends React.Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            <IntlMessages id="ui.disabled" />
          </Option>
          <Option value="Yamaha">yamaha</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
          <Option value="lucy">Lucy</Option>
        </Select>
      </div>
    );
  }
}
export default SelectBasic;
