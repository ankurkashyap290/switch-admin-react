import React from 'react';
import { Tabs, Input } from 'antd';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import InputSufixAndPrefix from './InputSufixAndPrefix';
import InputPrePostTab from './InputPrePostTab';
import InputFormatTooltip from './InputFormatTooltip';
import InputGroupDemo from './InputGroupDemo';
import InputCustomized from './InputCustomized';

const TabPane = Tabs.TabPane;
const Search = Input.Search;

const { TextArea } = Input;

class UiInput extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Input/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiInputBasic />
          </TabPane>
          <TabPane tab="Prefix and Sufix" key="2">
            <UiInputPreAndSufix />
          </TabPane>
          <TabPane tab="Pre Post Tab" key="3">
            <UiInputPrePostTab />
          </TabPane>
          <TabPane tab="Search Box" key="4">
            <UiInputSearch />
          </TabPane>
          <TabPane tab="Auto Sizing" key="5">
            <UiInputAutoSizing />
          </TabPane>
          <TabPane tab="Format Tooltip" key="6">
            <UiInputFormatTooltip />
          </TabPane>
          <TabPane tab="TextArea" key="7">
            <UiInputTextArea />
          </TabPane>
          <TabPane tab="Input Group" key="8">
            <UiInputGroup />
          </TabPane>
          <TabPane tab="Input Three Sizes" key="9">
            <UiInputThreeSizes />
          </TabPane>
          <TabPane tab="Customized Input" key="10">
            <UiInputCustomized />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiInput;

const InputBasic = () => {
  return <Input placeholder="Basic usage" />;
};

const UiInputBasic = UiBoxC(
  'Basic Usage',
  `Basic Usage Example.
  `,
  InputBasic
);

const UiInputPreAndSufix = UiBoxC(
  'Prefix and Sufix',
  `Add prefix or suffix icons inside input..
  `,
  InputSufixAndPrefix
);

const UiInputPrePostTab = UiBoxC(
  'Pre / Post tab',
  `Using pre & post tabs example.
  `,
  InputPrePostTab
);

const InputSearch = () => {
  return (
    <Search
      placeholder="input search text"
      style={{ width: 200 }}
      onSearch={value => console.log(value)}
    />
  );
};

const UiInputSearch = UiBoxC(
  'Search Box',
  `Example of creating a search box by grouping a standard input with a search button, added in 2.5.0.
  `,
  InputSearch
);

const InputAutoSizing = () => {
  return (
    <div>
      <TextArea placeholder="Autosize height based on content lines" autosize />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autosize={{ minRows: 2, maxRows: 6 }}
      />
    </div>
  );
};
const UiInputAutoSizing = UiBoxC(
  'Autosizing the height to fit the content',
  `autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust
    `,
  InputAutoSizing
);

const UiInputFormatTooltip = UiBoxC(
  'Format Tooltip Input',
  `You can use the Input in conjunction with Tooltip component to create a Numeric Input, which can provide a good experience for extra-long content display.
    `,
  InputFormatTooltip
);

const InputTextArea = () => {
  return <TextArea rows={4} />;
};

const UiInputTextArea = UiBoxC(
  'TextArea',
  `For Multiline Input
      `,
  InputTextArea
);

const UiInputGroup = UiBoxC(
  'Input Group',
  `Input Group Example
        `,
  InputGroupDemo
);

const InputThreeSizes = () => {
  return (
    <div className="example-input">
      <Input size="large" placeholder="large size" />
      <Input placeholder="default size" />
      <Input size="small" placeholder="small size" />
    </div>
  );
};

const UiInputThreeSizes = UiBoxC(
  'Three Sizes of Input',
  `There are three sizes of an Input box: large (32px)、default (28px) and small (22px).
          `,
  InputThreeSizes
);

const UiInputCustomized = UiBoxC(
  'Customized Inputs',
  `There are some examples of customized inputs
          `,
  InputCustomized
);
