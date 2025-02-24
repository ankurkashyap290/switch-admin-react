import React from 'react';
import { Calendar } from 'antd';

class CalendarBasic extends React.Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    return <Calendar onPanelChange={this.onPanelChange} />;
  }
}
export default CalendarBasic;
