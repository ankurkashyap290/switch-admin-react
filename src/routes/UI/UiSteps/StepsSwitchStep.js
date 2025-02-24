import React from 'react';
import { Steps, message, Button } from 'antd';
import IntlMessages from '../../../components/Misc/intlMessages';

const Step = Steps.Step;

class StepsSwitchStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next = () => {
    const { current } = this.state;
    this.setState({ current: current + 1 });
  };

  prev = () => {
    const { current } = this.state;
    this.setState({ current: current - 1 });
  };

  render() {
    const { current } = this.state;

    const steps = [
      {
        title: 'First',
        content: 'First-content',
      },
      {
        title: 'Second',
        content: 'Second-content',
      },
      {
        title: 'Last',
        content: 'Last-content',
      },
    ];

    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              <IntlMessages id="ui.uiSteps.next" />
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              <IntlMessages id="ui.uiSteps.done" />
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              <IntlMessages id="ui.uiSteps.previous" />
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default StepsSwitchStep;
