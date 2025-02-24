import React from 'react';
import { DatePicker, Radio } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const { MonthPicker, RangePicker } = DatePicker;

class DatePickerThreeSizes extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">
            <IntlMessages id="ui.uiDarePicker.large" />
          </Radio.Button>
          <Radio.Button value="default">
            <IntlMessages id="ui.uiDarePicker.default" />
          </Radio.Button>
          <Radio.Button value="small">
            <IntlMessages id="ui.uiDarePicker.small" />
          </Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <DatePicker size={size} />
        <br />
        <MonthPicker size={size} />
        <br />
        <RangePicker size={size} />
      </div>
    );
  }
}
export default DatePickerThreeSizes;
