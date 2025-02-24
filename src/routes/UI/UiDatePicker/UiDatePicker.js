import React from 'react';
import { Tabs, DatePicker } from 'antd';
import moment from 'moment';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import DatePickerBasic from './DatePickerBasic';
import DatePickerThreeSizes from './DatePickerThreeSizes';
import DatePickerCustomizedRangePicker from './DatePickerCustomizedRangePicker';
import DatePickerChooseTime from './DatePickerChooseTime';
import DatePickerDisabledDateAndTime from './DatePickerDisabledDateAndTime';
import DatePickerPresettedRanges from './DatePickerPresettedRanges';

const TabPane = Tabs.TabPane;
const { MonthPicker, RangePicker } = DatePicker;

class UiDatePicker extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Date Picker/>" wrapperClassName="datePickerDemo">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiDatePickerBasic />
          </TabPane>
          <TabPane tab="Three Sizes" key="2">
            <UiDatePickerThreeSizes />
          </TabPane>
          <TabPane tab="Disabled" key="3">
            <UiDatePickerDisabled />
          </TabPane>
          <TabPane tab="Customized RangePicker" key="4">
            <UiDatePickerCustomizedRangePicker />
          </TabPane>
          <TabPane tab="Extra Footer" key="5">
            <UiDatePickerExtraFooter />
          </TabPane>
          <TabPane tab="Date Format" key="6">
            <UiDatePickerDateFormat />
          </TabPane>
          <TabPane tab="Choose Time" key="7">
            <UiDatePickerChooseTime />
          </TabPane>
          <TabPane tab="Disabled Date and Time" key="8">
            <UiDatePickerDisabledDateAndTime />
          </TabPane>
          <TabPane tab="Presetted Ranges" key="9">
            <UiDatePickerPresettedRanges />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiDatePicker;

const UiDatePickerBasic = UiBoxC(
  'Basic',
  `Basic use case. Users can select or input a date in panel.
                                      `,
  DatePickerBasic
);

const UiDatePickerThreeSizes = UiBoxC(
  'Three Sizes',
  `The input box comes in three sizes. default will be used if size is omitted.
                                        `,
  DatePickerThreeSizes
);
const DatePickerDisabled = () => {
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div>
      <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
      <br />
      <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
      <br />
      <RangePicker
        defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
        disabled
      />
    </div>
  );
};
const UiDatePickerDisabled = UiBoxC(
  'Disabled',
  `A disabled state of date picker.
                                          `,
  DatePickerDisabled
);

const UiDatePickerCustomizedRangePicker = UiBoxC(
  'Customized Range Picker',
  `When RangePicker is not satisfied your requirements, try to implement similar functionality with two DatePicker.
                                            `,
  DatePickerCustomizedRangePicker
);

const DatePickerExtraFooter = () => {
  return (
    <div>
      <DatePicker renderExtraFooter={() => 'extra footer'} />
      <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
      <RangePicker renderExtraFooter={() => 'extra footer'} />
      <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    </div>
  );
};
const UiDatePickerExtraFooter = UiBoxC(
  'Extra Footer',
  `Render extra footer in panel for customized requirements..
                                              `,
  DatePickerExtraFooter
);

const DatePickerDateFormat = () => {
  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  return (
    <div>
      <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
      <br />
      <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      <br />
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
      />
    </div>
  );
};

const UiDatePickerDateFormat = UiBoxC(
  'Date Format',
  `We can set the date format by format.
                                                `,
  DatePickerDateFormat
);

const UiDatePickerChooseTime = UiBoxC(
  'Choose Time',
  `This property provide an additional time selection. When showTime is an Object, its properties will be passed on to built-in TimePicker.
                                                  `,
  DatePickerChooseTime
);

const UiDatePickerDisabledDateAndTime = UiBoxC(
  'Disabled Date and Time',
  `Disabled part of dates and time by disabledDate and disabledTime respectively, and disabledTime only works with showTime.
                                                    `,
  DatePickerDisabledDateAndTime
);

const UiDatePickerPresettedRanges = UiBoxC(
  'Presetted Ranges',
  `We can set presetted ranges to RangePicker to improve user experience.
                                                      `,
  DatePickerPresettedRanges
);
