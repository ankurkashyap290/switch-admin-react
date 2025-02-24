import React from 'react';
import { Tabs } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import CalendarNotice from './CalendarNotice';
import CalendarBasic from './CalendarBasic';
import CalendarCard from './CalendarCard';
import CalendarSelectable from './CalendarSelectable';

const TabPane = Tabs.TabPane;

class UiCalendar extends React.Component {
  render() {
    const mode = 'top'; // left / top
    return (
      <ComponentDemoLayout title="<Calendar/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiCalendarBasic />
          </TabPane>
          <TabPane tab="Notice Calendar" key="2">
            <UiCalendarNotice />
          </TabPane>
          <TabPane tab="Card" key="3">
            <UiCalendarCard />
          </TabPane>
          <TabPane tab="Selectable Calendar" key="4">
            <UiCalendarSelectable />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiCalendar;

const UiCalendarBasic = UiBoxC(
  'Basic',
  `A basic calendar component with Year/Month switch.
                                              `,
  CalendarBasic
);

const UiCalendarNotice = UiBoxC(
  'Notice Calendar',
  `This component can be rendered by using dateCellRender and monthCellRender with the data you need.
                                              `,
  CalendarNotice
);

const UiCalendarCard = UiBoxC(
  'Card',
  `Nested inside a container element for rendering in limited space.
                                              `,
  CalendarCard
);

const UiCalendarSelectable = UiBoxC(
  'Selectable Calendar',
  `A basic calendar component with Year/Month switch.
                                              `,
  CalendarSelectable
);
