import React from 'react';
import { Calendar } from 'antd';

class CalendarCard extends React.Component {
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    return (
      <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}
export default CalendarCard;
