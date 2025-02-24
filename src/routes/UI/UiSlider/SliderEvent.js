import React from 'react';
import { Slider } from 'antd';

class SliderEvent extends React.Component {
  onChange = value => {
    console.log('onChange: ', value);
  };

  onAfterChange = value => {
    console.log('onAfterChange: ', value);
  };

  render() {
    return (
      <div>
        <Slider defaultValue={30} onChange={this.onChange} onAfterChange={this.onAfterChange} />
        <Slider
          range
          step={10}
          defaultValue={[20, 50]}
          onChange={this.onChange}
          onAfterChange={this.onAfterChange}
        />
      </div>
    );
  }
}
export default SliderEvent;
