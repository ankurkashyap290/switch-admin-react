import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from 'layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import InputNumberBasic from './InputNumberBasic';
import InputNumberDisabled from './InputNumberDisabled';
import InputNumberFormatter from './InputNumberFormatter';
import InputNumberDecimals from './InputNumberDecimals';
import InputNumberSizes from './InputNumberSizes';

const TabPane = Tabs.TabPane;

class UiInputNumber extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Input Numeric/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiInputNumberBasic />
          </TabPane>
          <TabPane tab="Disabled" key="2">
            <UiInputNumberDisabled />
          </TabPane>
          <TabPane tab="Formatter" key="3">
            <UiInputNumberFormatter />
          </TabPane>
          <TabPane tab="Decimals" key="4">
            <UiInputNumberDecimals />
          </TabPane>
          <TabPane tab="Sizes" key="5">
            <UiInputNumberSizes />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiInputNumber;

const UiInputNumberBasic = UiBoxC(
  'Basic',
  `Numeric-only input box.
                                                        `,
  InputNumberBasic
);

const UiInputNumberDisabled = UiBoxC(
  'Disabled',
  `Click the button to toggle between available and disabled states.
                                                          `,
  InputNumberDisabled
);

const UiInputNumberFormatter = UiBoxC(
  'Formatter',
  `Display value within it's situation with formatter, and we usually use parser at the same time.
                                                            `,
  InputNumberFormatter
);

const UiInputNumberDecimals = UiBoxC(
  'Decimals',
  `A numeric-only input box whose values can be increased or decreased using a decimal step.
                                                              `,
  InputNumberDecimals
);

const UiInputNumberSizes = UiBoxC(
  'Sizes',
  `There are three sizes available to a numeric input box. By default, the size is 28px. The two additional sizes are large and small which means 32px and 22px, respectively.
                                                                `,
  InputNumberSizes
);
