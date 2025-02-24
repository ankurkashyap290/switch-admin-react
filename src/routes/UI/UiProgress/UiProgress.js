import React from 'react';
import { Tabs, Progress } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ProgressDynamic from './ProgressDynamic';
import ProgressDynamicCircular from './ProgressDynamicCircular';

const TabPane = Tabs.TabPane;

class UiProgress extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Progress Indicators/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Progress Bar" key="1">
            <UiProgressBar />
          </TabPane>
          <TabPane tab="Circular Progress Bar" key="2">
            <UiProgressCircular />
          </TabPane>
          <TabPane tab="A mini Progress Bar" key="3">
            <UiProgressMini />
          </TabPane>
          <TabPane tab="Mini Size Circular" key="4">
            <UiProgressMiniCircular />
          </TabPane>
          <TabPane tab="Dynamic" key="5">
            <UiProgressDynamic />
          </TabPane>
          <TabPane tab="Dashboard" key="6">
            <UiProgressDashboard />
          </TabPane>
          <TabPane tab="Custom text Format" key="7">
            <UiProgressCustomTextFormat />
          </TabPane>
          <TabPane tab="Dynamic Circular" key="8">
            <UiProgressDynamicCircular />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiProgress;

const ProgressBar = () => {
  return (
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};

const UiProgressBar = UiBoxC(
  'Progress Bar',
  `A Standard Progress bar.
                                  `,
  ProgressBar
);

const ProgressCircular = () => {
  return (
    <div>
      <Progress type="circle" percent={75} />
      &nbsp;
      <Progress type="circle" percent={70} status="exception" />
      &nbsp;
      <Progress type="circle" percent={100} />
    </div>
  );
};

const UiProgressCircular = UiBoxC(
  'Circular Progress Bar',
  `A Circular Progress bar.
                                    `,
  ProgressCircular
);

const ProgressMini = () => {
  return (
    <div style={{ width: 170 }}>
      <Progress percent={30} strokeWidth={5} />
      <Progress percent={50} strokeWidth={5} status="active" />
      <Progress percent={70} strokeWidth={5} status="exception" />
      <Progress percent={100} strokeWidth={5} />
    </div>
  );
};

const UiProgressMini = UiBoxC(
  'Mini Size Progress Bar',
  `Appropriate for a narrow area..
                                      `,
  ProgressMini
);

const ProgressMiniCircular = () => {
  return (
    <div>
      <Progress type="circle" percent={30} width={80} />
      &nbsp;
      <Progress type="circle" percent={70} width={80} status="exception" />
      &nbsp;
      <Progress type="circle" percent={100} width={80} />
    </div>
  );
};

const UiProgressMiniCircular = UiBoxC(
  'Mini Size Circular Progress Bar',
  `A smaller circular progress bar .
                                        `,
  ProgressMiniCircular
);

const UiProgressDynamic = UiBoxC(
  'Dynamic',
  `A dynamic progress bar is better.
                                          `,
  ProgressDynamic
);

const ProgressDashboard = () => {
  return <Progress type="dashboard" percent={75} />;
};

const UiProgressDashboard = UiBoxC(
  'Dashboard',
  `By setting type=dashboard, you can get a dashboard style of progress easily.
                                            `,
  ProgressDashboard
);

const ProgressCustomTextFormat = () => {
  return (
    <div>
      <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
      &nbsp;
      <Progress type="circle" percent={100} format={() => 'Done'} />
    </div>
  );
};

const UiProgressCustomTextFormat = UiBoxC(
  'Custom Text Format',
  `You can custom text format by setting format.
                                              `,
  ProgressCustomTextFormat
);

const UiProgressDynamicCircular = UiBoxC(
  'Dynamic Circular',
  `A dynamic progress bar is better.
                                                `,
  ProgressDynamicCircular
);
