import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;

class DatePickerDisabledDateAndTime extends React.Component {
  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i += 1) {
      result.push(i);
    }

    return result;
  };

  disabledDate = current => {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
  };

  disabledDateTime = () => {
    this.disabledHours();
    this.disabledMinutes();
  };

  disabledRangeTime = (_, type) => {
    if (type === 'start') {
      this.disabledHours();
      this.disabledMinutes();
      this.disabledSeconds();
    } else {
      this.disabledHoursRange();
      this.disabledMinutesRange();
      this.disabledSeconds();
    }
  };

  disabledHours = () => {
    this.range(0, 24).splice(4, 20);
  };

  disabledHoursRange = () => {
    this.range(0, 60).splice(20, 4);
  };

  disabledMinutes = () => {
    this.range(30, 60);
  };

  disabledMinutesRange = () => {
    this.range(0, 31);
  };

  disabledSeconds = () => [55, 56];

  render() {
    return (
      <div>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={this.disabledDate}
          disabledTime={this.disabledDateTime}
          showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        />
        <br />
        <MonthPicker disabledDate={this.disabledDate} placeholder="Select month" />
        <br />
        <RangePicker
          disabledDate={this.disabledDate}
          disabledTime={this.disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    );
  }
}
export default DatePickerDisabledDateAndTime;
