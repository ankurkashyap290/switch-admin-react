import React from 'react';
import { Tabs, Switch, Icon } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import SwitchBasic from './SwitchBasic';
import SwitchDisabled from './SwitchDisabled';

const TabPane = Tabs.TabPane;

class UiSwitch extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Switch/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiSwitchBasic />
          </TabPane>
          <TabPane tab="Disabled" key="2">
            <UiSwitchDisabled />
          </TabPane>
          <TabPane tab="Two Sizes" key="3">
            <UiSwitchTwoSizes />
          </TabPane>
          <TabPane tab="Text & Icon" key="4">
            <UiSwitchTextAndIcon />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiSwitch;

const UiSwitchBasic = UiBoxC(
  'Basic',
  `The most basic usage.
                                            `,
  SwitchBasic
);

const UiSwitchDisabled = UiBoxC(
  'Disabled',
  `Disable State of Switch.
                                              `,
  SwitchDisabled
);

const SwitchTwoSizes = () => {
  return (
    <div>
      <Switch />
      <br />
      <Switch size="small" />
    </div>
  );
};

const UiSwitchTwoSizes = UiBoxC(
  'Two Sizes',
  `size="small" represents a small sized switch.
                                                `,
  SwitchTwoSizes
);

const SwitchTextAndIcon = () => {
  return (
    <div>
      <Switch checkedChildren="open" unCheckedChildren="turn off" />
      <br />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <br />
      <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
    </div>
  );
};
const UiSwitchTextAndIcon = UiBoxC(
  'Text & Icon',
  `With text and icon.
                                                  `,
  SwitchTextAndIcon
);
