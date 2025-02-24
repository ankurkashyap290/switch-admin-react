import React from 'react';
import { Tabs, Radio } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import RadioDisabled from './RadioDisabled';
import RadioVerticalGroup from './RadioVerticalGroup';
import RadioStyle from './RadioStyle';
import RadioGroupOptional from './RadioGroupOptional';
import Radiogroup from './Radiogroup';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class UiRadio extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Radio/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiRadioBasic />
          </TabPane>
          <TabPane tab="Disabled" key="2">
            <UiRadioDisabled />
          </TabPane>
          <TabPane tab="Vertical Radio Group" key="3">
            <UiRadioVerticalGroup />
          </TabPane>
          <TabPane tab="Radio Style" key="4">
            <UiRadioStyle />
          </TabPane>
          <TabPane tab="Size" key="5">
            <UiRadioSize />
          </TabPane>
          <TabPane tab="Radio Group with Name" key="6">
            <UiRadioGroupWithName />
          </TabPane>
          <TabPane tab="Radio Group Optional" key="7">
            <UiRadioGroupOptional />
          </TabPane>
          <TabPane tab="Radio Group" key="8">
            <UiRadioGroup />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiRadio;

const RadioBasic = () => {
  return <Radio>Radio</Radio>;
};

const UiRadioBasic = UiBoxC(
  'Basic',
  `The Simplest use.
                                            `,
  RadioBasic
);

const UiRadioDisabled = UiBoxC(
  'disabled',
  `Radio unavailable.
                                              `,
  RadioDisabled
);

const UiRadioVerticalGroup = UiBoxC(
  'Vertical Radio Group',
  `Vertical Radio group with more radios.
                                                `,
  RadioVerticalGroup
);

const UiRadioStyle = UiBoxC(
  'Radio Style',
  `The combination of radio button style.
                                                  `,
  RadioStyle
);

const RadioSize = () => {
  return (
    <div>
      <div>
        <RadioGroup defaultValue="a" size="large">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup defaultValue="a">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
      <div style={{ marginTop: 16 }}>
        <RadioGroup defaultValue="a" size="small">
          <RadioButton value="a">Hangzhou</RadioButton>
          <RadioButton value="b">Shanghai</RadioButton>
          <RadioButton value="c">Beijing</RadioButton>
          <RadioButton value="d">Chengdu</RadioButton>
        </RadioGroup>
      </div>
    </div>
  );
};

const UiRadioSize = UiBoxC(
  'Size',
  `There are three sizes available: large, medium, and small. It can coordinate with input box.
                                                    `,
  RadioSize
);

const RadioGroupWithName = () => {
  return (
    <RadioGroup name="radiogroup" defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </RadioGroup>
  );
};

const UiRadioGroupWithName = UiBoxC(
  'Radio Group with name',
  `Passing the name property to all input[type="radio"] that are in the same RadioGroup. It is usually used to let the browser see your RadioGroup as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same RadioGroup.
                                                      `,
  RadioGroupWithName
);

const UiRadioGroupOptional = UiBoxC(
  'Radio Group optional',
  `Render radios by configuring options.
                                                        `,
  RadioGroupOptional
);

const UiRadioGroup = UiBoxC(
  'Radio Group ',
  `Group of radio component.
                                                          `,
  Radiogroup
);
