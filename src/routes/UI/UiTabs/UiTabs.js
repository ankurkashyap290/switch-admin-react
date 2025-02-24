import React from 'react';
import { Tabs, Icon, Button } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import IntlMessages from '../../../components/Misc/intlMessages';
import TabsBasic from './TabsBasic';
import TabsSlide from './TabsSlide';
import TabsPosition from './TabsPosition';
import TabsAddAndClose from './TabsAddAndClose';
import TabsCustomizedTrigger from './TabsCustomizedTrigger';

const TabPane = Tabs.TabPane;

class UiTabs extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="Tabs">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTabsBasic />
          </TabPane>
          <TabPane tab="Disabled" key="2">
            <UiTabsDisabled />
          </TabPane>
          <TabPane tab="Icon" key="3">
            <UiTabsIcon />
          </TabPane>
          <TabPane tab="Slide" key="4">
            <UiTabsSlide />
          </TabPane>
          <TabPane tab="Extra Content" key="5">
            <UiTabsExtraContent />
          </TabPane>
          <TabPane tab="Mini Tab" key="6">
            <UiTabsMini />
          </TabPane>
          <TabPane tab="Position" key="7">
            <UiTabsPosition />
          </TabPane>
          <TabPane tab="Card Type Tab" key="8">
            <UiTabsCardType />
          </TabPane>
          <TabPane tab="Add & Close" key="9">
            <UiTabsAddAndClose />
          </TabPane>
          <TabPane tab="Container of card type tab" key="10">
            <UiTabsContainerOfTab />
          </TabPane>
          <TabPane tab="Customized trigger of new Tab" key="11">
            <UiTabsCustomizedTrigger />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTabs;

const UiTabsBasic = UiBoxC(
  'Basic',
  `.Default activate first tab.
                                  `,
  TabsBasic
);

const TabsDisabled = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        <IntlMessages id="ui.uiTab.contentTab" /> 1
      </TabPane>
      <TabPane tab="Tab 2" disabled key="2">
        <IntlMessages id="ui.uiTab.contentTab" /> 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <IntlMessages id="ui.uiTab.contentTab" /> 3
      </TabPane>
    </Tabs>
  );
};

const UiTabsDisabled = UiBoxC(
  'Disabled',
  `.Disabled a tab.
                                    `,
  TabsDisabled
);

const TabsIcon = () => {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <Icon type="apple" />
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </span>
        }
        key="1"
      >
        <IntlMessages id="ui.uiTab.contentTab" /> 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </span>
        }
        key="2"
      >
        <IntlMessages id="ui.uiTab.contentTab" /> 2
      </TabPane>
    </Tabs>
  );
};

const UiTabsIcon = UiBoxC(
  'Icon',
  `The Tab with icon.
                                      `,
  TabsIcon
);

const UiTabsSlide = UiBoxC(
  'Slide',
  `Tab can be slide to left or right(up or down), which is used for a lot of tabs..
                                        `,
  TabsSlide
);

const TabsExtraContent = () => {
  const operations = <Button>Extra Action</Button>;
  return (
    <Tabs tabBarExtraContent={operations}>
      <TabPane tab="Tab 1" key="1">
        <IntlMessages id="ui.uiTab.contentTab" /> 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <IntlMessages id="ui.uiTab.contentTab" /> 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <IntlMessages id="ui.uiTab.contentTab" /> 3
      </TabPane>
    </Tabs>
  );
};

const UiTabsExtraContent = UiBoxC(
  'Extra Content',
  `You can add extra actions to the right of Tabs.
                                          `,
  TabsExtraContent
);

const TabsMini = () => {
  return (
    <Tabs defaultActiveKey="2" size="small">
      <TabPane tab="Tab 1" key="1">
        <IntlMessages id="ui.uiTab.contentTab" /> 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <IntlMessages id="ui.uiTab.contentTab" /> 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <IntlMessages id="ui.uiTab.contentTab" /> 3
      </TabPane>
    </Tabs>
  );
};

const UiTabsMini = UiBoxC(
  'Mini Tab',
  `Small size can be used in Modal.
                                            `,
  TabsMini
);

const UiTabsPosition = UiBoxC(
  'Position',
  `Tab's position: left, right, top or bottom.
                                              `,
  TabsPosition
);

const TabsCardType = () => {
  return (
    <Tabs type="card">
      <TabPane tab="Tab 1" key="1">
        <IntlMessages id="ui.uiTab.contentTab" /> 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <IntlMessages id="ui.uiTab.contentTab" /> 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <IntlMessages id="ui.uiTab.contentTab" /> 3
      </TabPane>
    </Tabs>
  );
};

const UiTabsCardType = UiBoxC(
  'Card Type Tab',
  `Another type Tabs, which doesn't support vertical mode.
                                                `,
  TabsCardType
);

const UiTabsAddAndClose = UiBoxC(
  'Add and Close',
  `Only card type Tabs support adding & closable.
                                                  `,
  TabsAddAndClose
);

const TabsContainerOfTab = () => {
  return (
    <div className="card-container">
      <Tabs type="card">
        <TabPane tab="Tab Title 1" key="1">
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 1
          </p>
        </TabPane>
        <TabPane tab="Tab Title 2" key="2">
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 2
          </p>
        </TabPane>
        <TabPane tab="Tab Title 3" key="3">
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 3
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 3
          </p>
          <p>
            <IntlMessages id="ui.uiTab.contentTab" /> 3
          </p>
        </TabPane>
      </Tabs>
    </div>
  );
};

const UiTabsContainerOfTab = UiBoxC(
  'Container of card type tab',
  `Should be used at the top of container, needs to override styles.
                                                    `,
  TabsContainerOfTab
);

const UiTabsCustomizedTrigger = UiBoxC(
  'Customized trigger of new tab',
  `Hide default plus icon, and bind event for customized trigger.
                                                      `,
  TabsCustomizedTrigger
);
