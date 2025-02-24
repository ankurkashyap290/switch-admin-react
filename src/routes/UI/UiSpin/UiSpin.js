import React from 'react';
import { Tabs, Spin, Alert } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import SpinEmbedded from './SpinEmbedded';
import SpinDelay from './SpinDelay';

const TabPane = Tabs.TabPane;

class UiSpin extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Spin/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiSpinBasic />
          </TabPane>
          <TabPane tab="Size" key="2">
            <UiSpinSize />
          </TabPane>
          <TabPane tab="Embedded Mode" key="3">
            <UiSpinEmbedded />
          </TabPane>
          <TabPane tab="Delay" key="4">
            <UiSpinDelay />
          </TabPane>
          <TabPane tab="Inside Container" key="5">
            <UiSpinInsideContainer />
          </TabPane>
          <TabPane tab="Customized description" key="6">
            <UiSpinCustomized />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiSpin;

const SpinBasic = () => {
  return <Spin />;
};

const UiSpinBasic = UiBoxC(
  'Basic',
  `The basic example.
                                  `,
  SpinBasic
);

const SpinSize = () => {
  return (
    <div>
      <Spin size="small" />
      &nbsp;
      <Spin />
      &nbsp;
      <Spin size="large" />
    </div>
  );
};

const UiSpinSize = UiBoxC(
  'Size',
  `A small Spin use in loading text, default Spin use in loading card-level block, and large Spin use in loading page.
                                    `,
  SpinSize
);

const UiSpinEmbedded = UiBoxC(
  'Embedded Mode',
  `Embedding content into Spin will alter it into loading state.
                                    `,
  SpinEmbedded
);

const UiSpinDelay = UiBoxC(
  'Delay',
  `Specifies a delay for loading state. If spinning ends during delay, loading status won't appear.
                                      `,
  SpinDelay
);

const SpinInsideContainer = () => {
  return (
    <div className="example">
      <Spin />
    </div>
  );
};

const UiSpinInsideContainer = UiBoxC(
  'Inside Container',
  `Spin in a container.
                                        `,
  SpinInsideContainer
);

const SpinCustomized = () => {
  return (
    <Spin tip="Loading...">
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  );
};

const UiSpinCustomized = UiBoxC(
  'Customized Description',
  `Customized Description Content.
                                          `,
  SpinCustomized
);
