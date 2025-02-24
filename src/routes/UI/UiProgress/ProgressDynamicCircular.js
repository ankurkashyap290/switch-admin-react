import React from 'react';
import { Progress, Button } from 'antd';

const ButtonGroup = Button.Group;

class ProgressDynamicCircular extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    const { percent } = this.state;
    let tempPercent = percent + 10;
    if (tempPercent > 100) {
      tempPercent = 100;
    }
    this.setState({ percent: tempPercent });
  };

  decline = () => {
    const { percent } = this.state;
    let tempPercent = percent - 10;
    if (tempPercent < 0) {
      tempPercent = 0;
    }
    this.setState({ percent: tempPercent });
  };

  render() {
    const { percent } = this.state;
    return (
      <div>
        <Progress type="circle" percent={percent} />
        &nbsp;
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}
export default ProgressDynamicCircular;
