import React from 'react';
import { Slider } from 'antd';

class SliderCustomizeTooltip extends React.Component {
  formatter = value => {
    return `${value}%`;
  };

  render() {
    return (
      <div>
        <Slider tipFormatter={this.formatter} />
        <Slider tipFormatter={null} />
      </div>
    );
  }
}
export default SliderCustomizeTooltip;
