import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import MenuTopNav from './MenuTopNav';
import MenuInline from './MenuInline';
import MenuCollapsedInline from './MenuCollapsedInline';
import MenuCurrentOnly from './MenuCurrentOnly';
import MenuVertical from './MenuVertical';
import MenuThemes from './MenuThemes';
import MenuSwitchType from './MenuSwitchType';

const TabPane = Tabs.TabPane;

class UiMenu extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Menus/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Top Navigation" key="1">
            <UiMenuTopNav />
          </TabPane>
          <TabPane tab="Inline Menu" key="2">
            <UiMenuInline />
          </TabPane>
          <TabPane tab="Collapsed Inline Menu" key="3">
            <UiMenuCollapsedInline />
          </TabPane>
          <TabPane tab="Open Current Submenu Only" key="4">
            <UiMenuCurrentOnly />
          </TabPane>
          <TabPane tab="Vertical Menu" key="5">
            <UiMenuVertical />
          </TabPane>
          <TabPane tab="Menu Themes" key="6">
            <UiMenuThemes />
          </TabPane>
          <TabPane tab="Switch the menu type" key="7">
            <UiMenuSwitchType />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiMenu;

const UiMenuTopNav = UiBoxC(
  'Top Navigation',
  `Horizontal top navigation menu.
                      `,
  MenuTopNav
);

const UiMenuInline = UiBoxC(
  'Inline Menu',
  `Vertical menu with inline submenus.
                        `,
  MenuInline
);

const UiMenuCollapsedInline = UiBoxC(
  'Collapsed Inline Menu',
  `Inline menu could be collapsed.
                          `,
  MenuCollapsedInline
);

const UiMenuCurrentOnly = UiBoxC(
  'Open current submenu only',
  `Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.
                            `,
  MenuCurrentOnly
);

const UiMenuVertical = UiBoxC(
  'Vertical Menu',
  `Submenus open as pop-ups.
                              `,
  MenuVertical
);

const UiMenuThemes = UiBoxC(
  'Menu Themes',
  `There are two built-in themes: 'light' and 'dark'. The default value is 'light'..
                                `,
  MenuThemes
);

const UiMenuSwitchType = UiBoxC(
  'Switch the menu type',
  `Show the dynamic switching mode (between 'inline' and 'vertical').
                                  `,
  MenuSwitchType
);
