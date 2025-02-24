import React from 'react';
import { Tabs, Steps, Icon } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import StepsSwitchStep from './StepsSwitchStep';
import StepsCustomizedDotStyle from './StepsCustomizedDotStyle';
import StepsFrom from '../../../components/Widgets/StepForm';

const TabPane = Tabs.TabPane;
const Step = Steps.Step;

class UiSteps extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Step/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiStepsBasic />
          </TabPane>
          <TabPane tab="Mini Version" key="2">
            <UiStepsMiniVersion />
          </TabPane>
          <TabPane tab="With Icon" key="3">
            <UiStepsWithIcon />
          </TabPane>
          <TabPane tab="Switch Step" key="4">
            <UiStepsSwitchStep />
          </TabPane>
          <TabPane tab="Vertical" key="5">
            <UiStepsVertical />
          </TabPane>
          <TabPane tab="Vertical Mini Version" key="6">
            <UiStepsVerticalMiniVersion />
          </TabPane>
          <TabPane tab="Error Status" key="7">
            <UiStepsErrorStatus />
          </TabPane>
          <TabPane tab="Dot Style" key="8">
            <UiStepsDotStyle />
          </TabPane>
          <TabPane tab="Customized Dot Style" key="9">
            <UiStepsCustomizedDotStyle />
          </TabPane>
          <TabPane tab="Step From" key="10">
            <StepsFrom />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiSteps;

const StepsBasic = () => {
  return (
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
};

const UiStepsBasic = UiBoxC(
  'Basic',
  `The most basic step bar.
                              `,
  StepsBasic
);

const StepsMiniVersion = () => {
  return (
    <Steps size="small" current={1}>
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
  );
};
const UiStepsMiniVersion = UiBoxC(
  'Mini Version',
  `By setting like this: <Steps size="small">, you can get a mini version.
                                `,
  StepsMiniVersion
);
const StepsWithIcon = () => {
  return (
    <Steps>
      <Step status="finish" title="Login" icon={<Icon type="user" />} />
      <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
      <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
      <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
    </Steps>
  );
};
const UiStepsWithIcon = UiBoxC(
  'WIth Icon',
  `You can use your own custom icons by setting the property icon for Steps.Step.
                                  `,
  StepsWithIcon
);

const UiStepsSwitchStep = UiBoxC(
  'Switch Step',
  `Cooperate with the content and buttons, to represent the progress of a process.
                                    `,
  StepsSwitchStep
);
const StepsVertical = () => {
  return (
    <Steps direction="vertical" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
};
const UiStepsVertical = UiBoxC(
  'Vertical',
  `A simple step bar in the vertical direction.
                                      `,
  StepsVertical
);
const StepsVerticalMiniVersion = () => {
  return (
    <Steps direction="vertical" size="small" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
};
const UiStepsVerticalMiniVersion = UiBoxC(
  'Vertical Mini Version',
  `A simple mini version step bar in the vertical direction.
                                        `,
  StepsVerticalMiniVersion
);
const StepsErrorStatus = () => {
  return (
    <Steps current={1} status="error">
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>
  );
};
const UiStepsErrorStatus = UiBoxC(
  'Error Status',
  `By using status of Steps, you can specify the state for current step.
                                          `,
  StepsErrorStatus
);
const StepsDotStyle = () => {
  return (
    <Steps progressDot current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  );
};
const UiStepsDotStyle = UiBoxC(
  'Dot Style',
  `Steps with progress dot style.
                                            `,
  StepsDotStyle
);

const UiStepsCustomizedDotStyle = UiBoxC(
  'Customized Dot Style',
  `You can customize the display for Steps with progress dot style.
                                              `,
  StepsCustomizedDotStyle
);
