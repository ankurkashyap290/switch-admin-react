import React from 'react';
import { Tabs, TimePicker } from 'antd';
import moment from 'moment';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import TimePickerBasic from './TimePickerBasic';
import TimePickerUnderControl from './TimePickerUnderControl';
import TimePickerDisabledTime from './TimePickerDisabledTime';
import TimePicker12Hours from './TimePicker12Hours';
import TimePickerAddon from './TimePickerAddon';

const TabPane = Tabs.TabPane;

class UiTimePicker extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Time Picker/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiTimePickerBasic />
          </TabPane>
          <TabPane tab="Under Control" key="2">
            <UiTimePickerUnderControl />
          </TabPane>
          <TabPane tab="Disabled" key="3">
            <UiTimePickerDisabled />
          </TabPane>
          <TabPane tab="Disabled Time" key="4">
            <UiTimePickerDisabledTime />
          </TabPane>
          <TabPane tab="12 hours" key="5">
            <UiTimePicker12Hours />
          </TabPane>
          <TabPane tab="Addon" key="6">
            <UiTimePickerAddon />
          </TabPane>
          <TabPane tab="Hour and Minute" key="7">
            <UiTimePickerHourAndMinute />
          </TabPane>
          <TabPane tab="Three Sizes" key="8">
            <UiTimePickerThreeSizes />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiTimePicker;

const UiTimePickerBasic = UiBoxC(
  'Basic',
  `Click TimePicker, and then we could select or input a time in panel.
                                              `,
  TimePickerBasic
);

const UiTimePickerUnderControl = UiBoxC(
  'Under Control',
  `value and onChange should be used together.
                                                `,
  TimePickerUnderControl
);

const TimePickerDisabled = () => {
  return <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />;
};

const UiTimePickerDisabled = UiBoxC(
  'Disabled',
  `A disabled state of time picker.
                                                  `,
  TimePickerDisabled
);

const UiTimePickerDisabledTime = UiBoxC(
  'Disabled Time',
  `Make part of time unselectable by disabledHours disabledMinutes disabledSeconds, and we even can hide those unselectable options by hideDisabledOptions.
                                                    `,
  TimePickerDisabledTime
);

const UiTimePicker12Hours = UiBoxC(
  '12 Hours',
  `TimePicker of 12 hours format, with default format h:mm:ss a.
                                                      `,
  TimePicker12Hours
);

const UiTimePickerAddon = UiBoxC(
  'Addon',
  `Render addon contents to timepicker panel's bottom.
                                                        `,
  TimePickerAddon
);

const TimePickerHourAndMinute = () => {
  const format = 'HH:mm';
  return <TimePicker defaultValue={moment('12:08', format)} format={format} />;
};

const UiTimePickerHourAndMinute = UiBoxC(
  'Hour and Minute',
  `While part of format is omitted, the corresponding column in panel will disappear, too.
                                                          `,
  TimePickerHourAndMinute
);

const TimePickerThreeSizes = () => {
  return (
    <div>
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
    </div>
  );
};

const UiTimePickerThreeSizes = UiBoxC(
  'Three Sizes',
  `The input box comes in three sizes. large is used in the form, while the medium size is the default.
                                                            `,
  TimePickerThreeSizes
);
