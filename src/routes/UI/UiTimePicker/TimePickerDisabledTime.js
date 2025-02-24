import React from 'react';
import { TimePicker } from 'antd';

class TimePickerDisabledTime extends React.Component {
  render() {
    const range = (start, end) => {
      const result = [];
      for (let i = start; i < end; i += 1) {
        result.push(i);
      }
      return result;
    };

    const disabledHours = () => {
      const hours = range(0, 60);
      hours.splice(20, 4);
      return hours;
    };

    const disabledMinutes = h => {
      if (h === 20) {
        return range(0, 31);
      } else if (h === 23) {
        return range(30, 60);
      }
      return [];
    };
    return (
      <div>
        <TimePicker
          disabledHours={disabledHours}
          disabledMinutes={disabledMinutes}
          placeholder="Just Disabled"
        />
        <TimePicker
          disabledHours={disabledHours}
          disabledMinutes={disabledMinutes}
          hideDisabledOptions
          placeholder="Hide Directly"
        />
      </div>
    );
  }
}
export default TimePickerDisabledTime;
