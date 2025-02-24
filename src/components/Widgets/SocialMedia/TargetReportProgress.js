import React, { Component } from 'react';
import { Card, Progress } from 'antd';

class TargetReportProgress extends Component {
  render() {
    const { label, percent, strokeColor } = this.props;
    return (
      <div className="targetReportSlider">
        <Card bordered={false}>
          <h3>{label}</h3>
          <Progress type="line" percent={percent} status="active" strokeColor={strokeColor} />
        </Card>
      </div>
    );
  }
}
export default TargetReportProgress;
