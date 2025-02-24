import React from 'react';
import { Tabs, Popconfirm } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import PopConfirmBasic from './PopConfirmBasic';
import PopConfirmConditionalTrigger from './PopConfirmConditionalTrigger';
import PopConfirmPlacement from './PopConfirmPlacement';

const TabPane = Tabs.TabPane;

class UiPopConfirm extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Pop Confirm/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiPopConfirmBasic />
          </TabPane>
          <TabPane tab="Locale text" key="2">
            <UiPopConfirmLocale />
          </TabPane>
          <TabPane tab="Conditional Trigger" key="3">
            <UiPopConfirmConditionalTrigger />
          </TabPane>
          <TabPane tab="Placement" key="4">
            <UiPopConfirmPlacement />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiPopConfirm;

const UiPopConfirmBasic = UiBoxC(
  'Basic',
  `The basic example.
                                  `,
  PopConfirmBasic
);

const PopConfirmLocale = () => {
  return (
    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
      <a href="#/">
        <IntlMessages id="ui.delete" />
      </a>
    </Popconfirm>
  );
};

const UiPopConfirmLocale = UiBoxC(
  'Locale Text',
  `Set okText and cancelText props to customise the button's labels.
                                    `,
  PopConfirmLocale
);

const UiPopConfirmConditionalTrigger = UiBoxC(
  'Conditional Trigger',
  `Make it pop up under some conditions.
                                      `,
  PopConfirmConditionalTrigger
);

const UiPopConfirmPlacement = UiBoxC(
  'Placement',
  `There are 12 placement options available. Use arrowPointAtCenter if you want arrow point at the center of target.
                                        `,
  PopConfirmPlacement
);
