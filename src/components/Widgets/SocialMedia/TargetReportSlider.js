import React, { Component } from 'react';
import { Card, Slider } from 'antd';

class TargetReportSlider extends Component {
  render() {
    const { label, marks, defaultValue } = this.props;
    return (
      <div className="targetReportSlider">
        <Card bordered={false}>
          <h3>{label}</h3>
          <Slider marks={marks} defaultValue={defaultValue} />
        </Card>
      </div>
    );
  }
}
export default TargetReportSlider;
