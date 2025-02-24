import React from 'react';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class DatePickerBasic extends React.Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        <DatePicker onChange={this.onChange} />
        <br />
        <MonthPicker onChange={this.onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={this.onChange} />
        <br />
        <WeekPicker onChange={this.onChange} />
      </div>
    );
  }
}
export default DatePickerBasic;
