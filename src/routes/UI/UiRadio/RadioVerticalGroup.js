import React from 'react';
import { Radio, Input } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const RadioGroup = Radio.Group;
class RadioVerticalGroup extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '32px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <RadioGroup onChange={this.onChange} value={value}>
        <Radio style={radioStyle} value={1}>
          <IntlMessages id="ui.option" /> A
        </Radio>
        <Radio style={radioStyle} value={2}>
          <IntlMessages id="ui.option" /> B
        </Radio>
        <Radio style={radioStyle} value={3}>
          <IntlMessages id="ui.option" /> C
        </Radio>
        <Radio style={radioStyle} value={4}>
          <IntlMessages id="ui.more" />
          ...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </RadioGroup>
    );
  }
}
export default RadioVerticalGroup;
