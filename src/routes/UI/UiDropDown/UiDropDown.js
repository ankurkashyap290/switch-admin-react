import React from 'react';
import { Tabs } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import DropDownBasic from './DropDownBasic';
import DropDownOther from './DropDownOther';
import DropdownClickEvent from './DropdownClickEvent';
import DropdownCascadingMenu from './DropdownCascadingMenu';
import DropDownHidingMenu from './DropDownHidingMenu';
import DropDownWithButton from './DropDownWithButton';
import DropDownTrigger from './DropDownTrigger';
import DropDownPlacement from './DropDownPlacement';

const TabPane = Tabs.TabPane;

class UiDropDown extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="Menu <DropDown/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiDropDownBasic />
          </TabPane>
          <TabPane tab="Other Element" key="2">
            <UiDropDownOther />
          </TabPane>
          <TabPane tab="Click Event" key="3">
            <UiDropDownClickEvent />
          </TabPane>
          <TabPane tab="Cascading Menu" key="4">
            <UiDropDownCascadingMenu />
          </TabPane>
          <TabPane tab="The way of hiding menu" key="5">
            <UiDropDownHidingMenu />
          </TabPane>
          <TabPane tab="Button with drop down menu" key="6">
            <UiDropDownButtonMenu />
          </TabPane>
          <TabPane tab="Trigger Mode" key="7">
            <UiDropDownTrigger />
          </TabPane>
          <TabPane tab="Placement" key="8">
            <UiDropDownPlacement />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiDropDown;

const UiDropDownBasic = UiBoxC(
  'Basic',
  `The most basic drop down menu.
            `,
  DropDownBasic
);

const UiDropDownOther = UiBoxC(
  'Other Elements',
  `Divider and disable menu items.
              `,
  DropDownOther
);

const UiDropDownClickEvent = UiBoxC(
  'Click Event',
  `An event will be triggered when you click menu items, in which you can make different operations according to item's key.
                `,
  DropdownClickEvent
);

const UiDropDownCascadingMenu = UiBoxC(
  'Cascading Menu',
  `The menu has multiple Items
                  `,
  DropdownCascadingMenu
);

const UiDropDownHidingMenu = UiBoxC(
  'The way of hiding menu',
  `The default is to close the menu when you click on menu items, this feature can be turned off.
                    `,
  DropDownHidingMenu
);

const UiDropDownButtonMenu = UiBoxC(
  'Button with dropdown  menu',
  `A button is on the left, and a related functional menu is on the right.
                    `,
  DropDownWithButton
);

const UiDropDownTrigger = UiBoxC(
  'Trigger Mode',
  `The default trigger mode is hover, you can change it to click.
                    `,
  DropDownTrigger
);

const UiDropDownPlacement = UiBoxC(
  'Placement',
  `Support Six Placement.
                    `,
  DropDownPlacement
);
