import React from 'react';
import { Tabs, Checkbox } from 'antd';

import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import CheckBoxBasic from './CheckBoxBasic';
import CheckBoxControlled from './CheckBoxControlled';
import CheckBoxCheckAll from './CheckBoxCheckAll';
import CheckBoxWithGrid from './CheckBoxWithGrid';
import CheckBoxGroup from './CheckBoxGroup';

const TabPane = Tabs.TabPane;

class UiCheckBox extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<CheckBox/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiCheckBoxBasic />
          </TabPane>
          <TabPane tab="Controlled CheckBox" key="2">
            <UiCheckBoxControlled />
          </TabPane>
          <TabPane tab="Check ALL" key="3">
            <UiCheckBoxCheckAll />
          </TabPane>
          <TabPane tab="Disabled" key="4">
            <UiCheckBoxDisabled />
          </TabPane>
          <TabPane tab="Use with Grid" key="5">
            <UiCheckBoxWithGrid />
          </TabPane>
          <TabPane tab="Check Box Group" key="6">
            <UiCheckBoxGroup />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCheckBox;

const UiCheckBoxBasic = UiBoxC(
  'Basic',
  `Basic Usage of CheckBox.
                                `,
  CheckBoxBasic
);

const UiCheckBoxControlled = UiBoxC(
  'Controlled Checkbox',
  `Communicated with other component.
                                  `,
  CheckBoxControlled
);

const UiCheckBoxCheckAll = UiBoxC(
  'Check All',
  `The indeterminate property can help you to achieve a 'check all' effect.
                                    `,
  CheckBoxCheckAll
);

const CheckBoxDisabled = () => {
  return (
    <div>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </div>
  );
};
const UiCheckBoxDisabled = UiBoxC(
  'Disabled',
  `Disabled CheckBox.
                                    `,
  CheckBoxDisabled
);

const UiCheckBoxWithGrid = UiBoxC(
  'Use with Grid',
  `We can use Checkbox and Grid in Checkbox.Group, to implement complex layout..
                                    `,
  CheckBoxWithGrid
);

const UiCheckBoxGroup = UiBoxC(
  'Check Box Group',
  `Generate a group of checkboxes from an array..
                                    `,
  CheckBoxGroup
);
