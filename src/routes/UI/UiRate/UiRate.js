import React from 'react';
import { Tabs, Rate, Icon } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import RateShowCopyWriting from './RateShowCopyWriting';

const TabPane = Tabs.TabPane;

class UiRate extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Rate/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiRateBasic />
          </TabPane>
          <TabPane tab="Half Star" key="2">
            <UiRateHalfStar />
          </TabPane>
          <TabPane tab="Show Copy Writing" key="3">
            <UiRateShowCopyWriting />
          </TabPane>
          <TabPane tab="Read Only" key="4">
            <UiRateReadOnly />
          </TabPane>
          <TabPane tab="Other Character" key="5">
            <UiRateOther />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiRate;

const RateBasic = () => {
  return <Rate />;
};

const UiRateBasic = UiBoxC(
  'Basic',
  `The Simplest usage.
                                          `,
  RateBasic
);

const RateHalfStar = () => {
  return <Rate allowHalf defaultValue={2.5} />;
};

const UiRateHalfStar = UiBoxC(
  'Half Star',
  `Support select Half Star.
                                            `,
  RateHalfStar
);

const UiRateShowCopyWriting = UiBoxC(
  'show copy writing',
  `Add copy writing in rate component.
                                              `,
  RateShowCopyWriting
);

const RateReadOnly = () => {
  return <Rate disabled defaultValue={2} />;
};

const UiRateReadOnly = UiBoxC(
  'Read Only',
  `Read only, cannot use mouse to interact.
                                            `,
  RateReadOnly
);

const RateOther = () => {
  return (
    <div>
      <Rate character={<Icon type="heart" />} allowHalf />
      <br />
      <Rate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <Rate character="it is good" allowHalf />
    </div>
  );
};

const UiRateOther = UiBoxC(
  'Other Character',
  `Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
                                              `,
  RateOther
);
